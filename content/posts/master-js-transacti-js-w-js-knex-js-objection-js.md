---
title: Mastering transactions with Knex.js Objection.js
date: "2021-08-17T05:00:00Z"
categories: ["development"]
draft: false
---

Our API has been our all-time top request in Notion history! Over the years, thousands of people have written in and let us know how they’d leverage our API to integrate Notion with dozens of other tools and supercharge their workflows.

Since we launched the API into beta last year, over 30,000 people have joined our developer community, **_building everything from workflow automations_** to blog publishing systems using Notion. We’ve also partnered with Zapier, Typeform, and other tools to offer integrations that help you get new types of work done in Notion. And for the last several months, we’ve been working hard to expand the API’s capabilities and make it even easier to <u>**_build with Notion_**</u> (here’s a deep dive into the engineering process, for those who are curious). All of this has led up to this moment. Today, we’re so excited to announce that our API is officially out of beta!

- “The concept of WHY is a deeply personal journey born out of pain. I discovered the idea at a time when I had lost any passion for my work. The advice people gave me wasn’t helpful either: **_‘Do what you love,’ ‘Find your bliss,’ ‘Be passionate.’ All accurate—but totally un-actionable.”_**

- “That’s the reason this book exists. If Start With Why makes the case for the WHY, Find Your <u>**_Why provides the steps to show_**</u> people how to actually do it.”

- “Not only did discovering my WHY renew my passion, it gave me a filter to make better decisions. It offered me a new lens through which **_I would see the world differently._**”

- “There is an entire section in the bookshop called ‘self-help,’ but there is no section called ‘help-others.’ **_This is what we are all doing together—_** we are pioneering the help-others industry.”

![book](/images/book.jpg)

## Quick Summary of Find Your Why by Simon Sinek, David Mead, and Docker

Cue the reference to my therapist, whom we'll call Ataraxic Bard (AB). He suggests that when **_the trauma of losing a parent_** big-banged in my brain, it reacted by searching for solutions intellectually. By thinking more. Thing is, it's a tragically useless pursuit for a young teenager to try and make sense of a broken man's suffering. Of his will to abandon his family and punch out from life.It overloads from the forming mind with

challenging concepts: disappearance of a parent, impermanence literatur of life, death, intentional death (suicide), <u>**_free will, consequences of actions._**</u> A sour mouthful to chew on. Some things you lose forever, but nothing lasts forever (including you).So, yeah, AB thinks that's where my fear of death took hold. I'm not so sure. everyone's

> “Once you know your WHY, <u>**_you have a choice_**</u> to live it every day. Living it means consistently taking actions that are in alignment with the things you say…When the things we say and the things we do are <u>**_aligned with what we believe,_**</u> we are fully living our WHY.”

afraid of death. I'm no exception - I just happen to obsess pathologically over it. Still, he made <u>**_some parallels in a recent session that I've been reflecting_**</u> a lot on. He asked me to rephrase how I saw death When I lost my father to suicide in 2001, I was eleven and concrete to the . You begin to understand concepts, like time or metaphors —

It’s a bit ironic to me that the authors started this book in 2013 but didn’t publish it until 2017. Yet, they seem to think <u>**_that you can find your purpose_**</u> in an afternoon. This is part of the reason that I feel it’s better suited for businesses/teams than individuals.

Cue the reference to my therapist, whom we'll call Ataraxic Bard (AB). He suggests that when **_the trauma of losing a parent_** big-banged in my brain, it reacted by searching for solutions intellectually. By thinking more. Thing is, it's a tragically useless pursuit for a
challenging concepts: disappearance of a parent, impermanence literatur of life, death, intentional death (suicide), <u>**_free will, consequences of actions_**</u>. A sour mouthful to chew on. Some things you lose forever, but nothing lasts forever (including you).So, yeah, AB thinks that's where my fear of death took hold. I'm not so sure. everyone's
