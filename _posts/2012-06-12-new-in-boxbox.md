--- 
layout: post
title: "What's new in boxbox"
published: true
tags: 
- boxbox
type: post
status: publish
---

[boxbox](http://incompl.github.com/boxbox/), my JavaScript framework for making 2d physics-based games with [box2d](http://box2d.org/), has come a long way. If you haven't seen it before, [this tutorial](http://weblog.bocoup.com/introducing-boxbox/) covers the basics. In this article I'm going to quickly cover some of what's new and where boxbox is headed.

I've been building a [Castlevania](http://en.wikipedia.org/wiki/Castlevania)-like platform game with boxbox, and my experience building a real game has been the main factor informing my design decisions.

### Making boxbox more like a framework

I've made the switch from calling boxbox a library to calling it a framework. boxbox is becoming more capable as the infrastructure that houses a game, rather than simply a tool to use while making a game.

#### init

An interesting question I've considered while designing boxbox is this: when should something be an entity option, when should it be a method, and when should it be both? For example, event handlers are added via methods and currently must be attached after an entity is created. Is this ideal?

I'm still pondering this question, so in the meantime I've added `init`. It's useful in general, but it also lets me punt around this design decision by attaching event handlers in the `init` function.

{% highlight javascript %}
world.createEntity({
  init: function() {
    this.applyImpulse(10); // jump immediately after being created
  }
});
{% endhighlight %}

#### Custom properties

I've often said that a useful pattern when using boxbox would be to have your own model objects that contain boxbox entities. That way you could do your own domain logic and delegate to the boxbox entity when necessary. In practice, this sucks. As I tried it, it just felt like a bunch of extra effort that I shouldn't have to do. What felt natural was using the boxbox entities for everything.

After trying a few ideas, I'm currently liking what I'm calling "custom properties". This one might seem a little odd, but hear me out, because it's a very practical approach. When creating a boxbox entity, options that start with `$` are not treated as a boxbox options, they're simply passed along as properties on the resulting entity. 

Here is an example of implementing a damageable object using custom properties:

{% highlight javascript %}
var enemy = world.createEntity({
  x: 5, // boxbox option
  y: 10, // boxbox option
  $hp: 10, // custom property
  $damage: function(amount) { // custom property (in this case, a method)
    this.$hp -= amount;
    if (this.$hp <= 0) {
      this.destroy();
    }
  }
});
enemy.$damage(5); // entity is not destroyed
enemy.$damage(5); // entity is destroyed
{% endhighlight %}

I'm not 100% committed to this system, but so far I like using it.

### Patching box2d

box2d has some behaviors I don't really like. These may or may not be "bugs" but they do add complexity I'd prefer to sidestep.

#### Events on destroyed entities

By default, box2d may continue to trigger events for entities that were recently destroyed. boxbox now prevents these events.

#### Object creation in event handlers

box2d does not allow object creation in event handlers. The world is "locked" at that time. This is disruptive to healthy event-driven programming patterns. boxbox will automatically queue object creation if the world is locked. So far the effect is seamless.

This example shows an entity that creates another entity in an event handler. It's easy to see how this could be expanded into a "respawn" system. Until recently, this code would throw an exception.

{% highlight javascript %}
var enemy = world.createEntity({
  // options here 
});
enemy.onImpact(function() {
  this.destroy();
  world.createEntity({
    // options here
  }});
});
{% endhighlight %}

### Event changes

#### onRender

`onRender` isn't new, but now it can be attached to entities as well as worlds. The value of `this` in the callback will be appropriate based on which it was attached to.

#### onTick

`onTick` is new, attachable to both entities and worlds. This allows boxbox to manage your game loop. Ticks are events that happen at a regular interval, default every 50 milliseconds, configurable with the `tickFrequency` option on your world. `onTick` is something I have thought about since boxbox was created, but I'm implementing it now due to my decision for boxbox to become a framework rather than a simple library.

It's important to use `onRender` only for drawing things to the canvas, while using `onTick` for game logic. `onRender` is optimized by [requestAnimationFrame](https://developer.mozilla.org/en/DOM/window.requestAnimationFrame) and may not occur at a constant rate, but it’s called once per frame drawn to the canvas. `onTick` is called regularly regardless of the current framerate.

### Rendering

#### Sprite sheet support

Most 2d games use sprite sheets for animation. They're images [like this](http://www.nes-snes-sprites.com/ImagesSheet/FinalFantasy3Sheet1.gif) that contain all the different frames of an animation or multiple animations.

In boxbox you can use an entity's image as a spritesheet by adding a couple extra parameters.

{% highlight javascript %}
var player = world.createEntity({
  image: "player.png",
  spriteSheet: true,
  spriteWidth: 16, // the width, in pixels, of a single sprite
  spriteHeight: 16 // same but height
});
player.sprite(0, 2); // set the image to column 0, row 2 in the spritesheet
{% endhighlight %}

You might notice that boxbox doesn't support spritesheets that are not based on grids. That's for simplicity, and it may change.

### That's it for now

Drop me a [tweet](https://twitter.com/_gsmith) if you have any comments or questions, and issues are always welcome on [github](https://github.com/incompl/boxbox/issues?direction=desc&sort=created&state=open). Enjoy!