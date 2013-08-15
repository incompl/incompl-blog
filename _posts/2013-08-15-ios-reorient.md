--- 
layout: post
title: "A fix for orientation change of unzoomable webapps on iOS"
published: true
tags: 
- javascript
type: post
status: publish
preview: all
---

Orientation change on iOS is a known problem, and [the popular solution](https://github.com/scottjehl/iOS-Orientationchange-Fix) is useful for normal websites, but not fixed, unzoomable games. Of course I can't let that stop me though, so here is [ios-reorient](https://github.com/incompl/ios-reorient/), my solution for games that let you change between landscape and portrait mode on iOS devices.

The only other solution I've seen is [dubious](http://stackoverflow.com/a/12114397/1096165). [This Stackoverflow thread](http://stackoverflow.com/questions/2581957/iphone-safari-does-not-auto-scale-back-down-on-portrait-landscape-portrait) has a highly-rated answer that seems to solve an unrelated problem. Have you seen any other approaches to this problem? Let me know!