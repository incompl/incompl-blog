--- 
layout: post
title: "A Culture of Pretending Hard Things Are Easy"
published: true
tags: 
- programming
type: post
status: publish
preview: 75
---

<img class="alignright" src="/images/git.png">

I have been thinking a lot about git lately. I have been writing down [my thoughts on why the git command-line interface sucks](https://gist.github.com/incompl/3819571). I'm not the only one who [feels this way](https://www.google.com/search?q=git+hard+to+use&aq=f&oq=git+hard+to+use&aqs=chrome.0.57j60l2j0j62l2.1599j0&sourceid=chrome&ie=UTF-8). But this tackles the symptom and not the cause. Why is the command-line interface for such an important piece of software so bad? I think the answer is a broader problem with software, culture, and user experience.

Traditionally, software is hard to use. The field of user experience (UX) is maybe 20 years old. UX is the science of making software easy to use and understand. The field of software development has been around for over 100 years if you count punchcards, or maybe 40 years if you only count C and C-like languages. Software was hard to use as a matter of fact for decades. Only smart people could write it, or even use it.

The ability to understand things that are hard to use became a badge of honor among programmers. The ability to think abstractly and understand complex systems was necessary to use software.

We're past that now. Everyone uses software. You don't have to think abstractly or understand complex systems to use Gmail. People have written [great](http://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758/ref=sr_1_1?ie=UTF8&qid=1366210137&sr=8-1&keywords=book+don%27t+make+me+think) [books](http://www.amazon.com/The-Elements-User-Experience-User-Centered/dp/0735712026) about how to make software easy-to-use.

On the other hand, programmer culture still has some bad habits from the past. Many folks still believe that being smart enough to understand hard-to-use software is a badge of honor. People who find a particular piece of software troublesome just need to learn it better, they say. It's simple if you just understand the implementation. That's what programmers do.

Programmers can't get away with it when writing tools for the general public, but they still get away with it when they're writing programs _for programmers_. That's a bad thing: programmers should have easy-to-use tools too.

And that's the problem with git. Instead of being upset that it's hard to use, too many people feel like they're stupid unless they can figure it out. Once they get it they say "it's easy, you just have to understand how it works". They're OK with saying you need to understand snapshots, checksums, SHA-1 hashes, hexidecimal, and object databases as part of the [Getting Started guide](http://git-scm.com/book/en/Getting-Started-Git-Basics). But in reality, this is not stuff you need to think about while using any other source control software I've used. None of these words are in the instructions for using [legit](http://kennethreitz.org/exposures/legit). Nothing about git conceptually requires an understanding of these types of details.

In my office, we have non-programmers who make changes to our website. We use git to manage that website. They can usually do just fine: non-programmers are smart people too. But sometimes the git command-line tricks them, and someone has to come over and figure out what the hell is going on. This is not because you need smart people to help the dumb people. This is because *git is too hard to use*.

Let's not feel obliged to defend hard-to-use software. Let's just fix it.

[image source](http://paulhammant.com/blog/branch_by_abstraction.html/)