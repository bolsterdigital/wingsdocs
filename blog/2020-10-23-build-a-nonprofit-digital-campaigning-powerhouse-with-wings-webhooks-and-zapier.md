---
title: Build a digital powerhouse with webhooks and Zapier
description: As a digital strategist or campaigner for a progressive nonprofit, you need to turn a multitude of online services, tools and applications into a finely tuned campaigning powerhouse.
slug: build-a-nonprofit-digital-campaigning-powerhouse-with-wings-webhooks-and-zapier
authors:
  - name: Jaap Stronks
    title: Digital strategist
    url: https://www.twitter.com/jaapstronks
    image_url: https://screens.wings.dev/avatar-jaapstronks-76l7b6CsaWHRsbsqQ7OPIMlleZSbv3I5r3KV6w5Wx7GmVr0ozCnQgQHwNUGbG9XPu2RyFo18h6Duq2KSUWo9tOcJupIyh7A7e09m.jpeg

tags: [wings]
image: '/img/webhooks-2.png'
hide_table_of_contents: false
---

import ImageComponent from '../src/components/ImageComponent';
import webhooks from '/img/webhooks.png';

As a digital strategist or campaigner for a progressive nonprofit, you need to turn a multitude of online services, tools and applications into a finely tuned campaigning powerhouse.

<ImageComponent image={webhooks} />

You have to reach people using social media, word-of-mouth, canvassing campaigns and ads, in order to allow them to take a first step on a ladder of engagement and convert them into fans, supporters, donors, activists and members. And webhooks are a great tool to help make that happen.

<!--truncate-->

## Why progressive campaigns need a headless CMS

To build this powerhouse, you need a centralised environment where you and other digital campaigners and communications officers create and manage content and campaigns. It is where you publish news, information, election manifestos and campaigns that attract attention and serve as digital touch points where users can begin their customer journey or take a next step on the ladder of engagement.

Although a CMS requires a frontend web application – the website that users visit, which is typically the primary environment where the CMS content will be displayed publicly – this content may also be displayed in various other environments, such as a mobile app for party members, a canvassing application for activists, or an advocacy toolkit where you plan and execute engagement campaigns via email or instant messaging.

That's why CMS's are increasingly often headless: they store and edit content in a repository that makes content accessible via an API, allowing you to build a separate frontend web application. There are multiple types of headless CMS's, though:

- There are true headless CMS's that only service as a repository for content, giving you full flexibility to create frontend web applications. Great options include Contentful, Strapi and Storyblok. They are typically geared towards developers.
- Then you have CMS's that are traditionally monoliths such as WordPress and Drupal that combine a CMS service, database and frontend into a single package, but allow you to 'decouple' the frontend and serve the content on a separate application. Because the content is typically prepackaged in a certain way and not fully frontend-agnostic, this setup is typically called decoupled. This setup is also typically geared towards developers.
- A third category is one we made specifically for Wings: a fully headless CMS with an integrated frontend application – which only makes sense because Wings is an opinionated platform, geared towards nonprofit and progressive political campaigning. Wings has a fully headless, frontend-agnostic CMS service which serves content via a (GraphQL) API as well as webhooks, but it does come with a built-in frontend web application – meaning: you don't need to build your own custom frontend if you don't want to. This is a hybrid solution that creates a turnkey product (meaning: no custom development required to create and launch a professional website), while still allowing you to use its headless CMS service to create custom integrations or use an alternative or additional frontend.

This makes a lot of sense for nonprofits and political parties: you can start out with a turnkey campaigning platform that works great out of the box, without being limited. You could hire a digital agency to build a custom frontend, or you could use its webhooks support to integrate with third party tools and services.

## What you can do with webhooks

This is where webhooks come in. If you need to learn more about webhooks, [this Zapier article](https://zapier.com/blog/what-are-webhooks/) is a good starting point, but in a nutshell: webhooks are a standardised method of secure communication between web services, allowing them to notify them of events. It is like a notification service from A to B, where you have configured service B to be able to receive incoming messages from service A and handle them a certain way. You can also use intermediary services like Zapier to receive webhooks and use the information received to automatically make changes in a third party services. To clear things up, let's give a few examples:

- When a website visitor fills out a newsletter signup form on your Wings website and clicks the confirmation link on the email they will receive from Wings, the Wings CMS service will fire off a webhook with their name and email address to your email newsletter service or engagement toolkit (you can use Zapier to build advanced and user-friendly integrations with The Action Network, Nationbuilder, Mailchimp or anything you want), where the user will be subscribed to a specific email list.
- When a website visitor makes a donation on your website, a webhook will make sure the user in your CRM system such as Salesforce or Microsoft Dynamics will be flagged as a donor. Another webhook may create a todo for a fundraising officer in Trello with a reminder to send a 'thank you' message if the donation amount exceeds $ 250.
- You could even use a webhook to make the smart lighting system in your office temporarily switch to 'party mode', or configure notifications to show up in Discord or Slack.
- If a user submits a signup form for volunteers, a webhook may send their information to a service like Zapier where you could add some conditional routing (Zapier Paths) to forward their information to the right volunteer coordinator, based on the ZIP code they entered.
- If a user fills out a contact form, you could use Zapier to configure smart email notifications, allowing you to use merge tags to insert form field values (like the user's first and last name, etc.) into an email.
- It is also possible to use the creation or an update of an article, page or campaign as a webhook.

## Better than an all-in-one toolkit

The examples above are just the tip of the iceberg: the possibilities are limitless. This is why your campaigning setup probably should not be an all-in one system that does everything: if services can communicate with each other, you can build your own custom integrations or use user-friendly services like Zapier to tie them together. All we needed to do was build Wings from the ground up to have great webhooks support in addition to the GraphQL API endpoints, so that Wings can be combined with other services and platforms.

We believe that your digital campaigning infrastructure should be integrated but modular, based on the idea of a separation of concerns, a well-known design principle in software architecture that stipulates that digital infrastructure should be separated into three domains:

- Content: the data of articles, pages and campaign contents (the Wings CMS service)
- Business logic: the way your CRM and marketing systems are set up, but also how your own APIs and tools like Zapier function (which Wings enables with webhooks support)
- Style and presentation: the frontend and visual appearance of your website (which is why Wings has a great frontend application that integrates with the CMS service, although it can be customised or exchanged for a totally alternative, custom-built frontend app).

## Get started with Wings and webhooks

Would you like to find out what you can do with Wings and webhooks? Request a [free demo Wings environment here](/demo).
