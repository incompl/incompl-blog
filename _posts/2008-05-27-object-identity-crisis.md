--- 
layout: post
title: Object identity crisis
published: true
meta: 
  _edit_last: "1"
tags: 
- object-oriented
- objects
- programming
type: post
status: publish
---
One of the things I learned a few years ago is that a lot of people who program in object-oriented languages don't have a good answer to these questions:  What is an object?  What is an object-oriented language?

It is easy to explain, but the very clear and precise answer is another thing.

An object is something that has identity, state, and behavior.  Most "things" in a programming language, besides objects, only have one or two of these traits.  Depending on the language, and oversimplifying a little, we see this:

Value: Just identity
Variable: Just state
Function: Just behavior
Struct: Identity and state
Subroutine: State and behavior
Functor: Identity and behavior
Object: All of the above

This reveals one of the elegancies of objects: they can represent any other type of "thing" in a programming language.

As for the other question: What is an object-oriented language?  Saying it is a language with objects is technically wrong.  You can have objects in languages that aren't generally called object-oriented.  What about languages where objects are first class?  Hmm, nah, how well a language treats its values seems to be independent from the type of language it is.

The answer I like is that an object-oriented language has some way of abstracting over objects.  This is a vague requirement, but thankfully the types of object-oriented languages, such as class-based or prototype-based, happily declare their way of abstracting over objects right in the name.

I probably didn't teach anybody anything here, but I sure like straight-forward answers to straight-forward questions.
