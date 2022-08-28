---
sidebar_position: 5
---

# Setting up a cookiewall

Here, you will find information about how to set up a cookiewall.

## Why cookiewalls?

Cookiewalls are a way to let website visitors decide which types of cookies and trackers they will consent to. If you embed a YouTube video or insert a third-party script that tracks your visitor's behaviour to optimize marketing campaigns, for example, you would be sharing privacy-sensitive information with third parties. A 'cookie wall' offers website visitors a way to decide what types of cookies & trackers they will permit.

Here's an example of a cookie wall that allow visitors to consent to multiple types of cookies:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-14.45.48-7aECqDihkGEKQ6gJnd7mF9Dsxaqxe53M7XfXdnOJtZQuCST5cwEUAv3MoG1x8QYyDnsKpEDecdXuPpAZEwEGPVLztnLLD6Ub4PMU.png)

The most important things you should know:

- _Unless_ you decide to use additional third party scripts and/or embed YouTube videos, a cookie wall is not necessary.
- If you use [Matomo](https://matomo.org), a privacy friendly Google Analytics alternative), a cookie wall is not necessary either.
- Many cookiewall services are able to detect which cookies your website is serving, and will list them under the correct categories, so that visitors can consent to those categories of cookies.
- Acting privacy-friendly is different from being _compliant_ with privacy regulations. Many people will click 'consent' on a cookie wall, which would officially allow you to store an unlimited amount of privacy-invasive cookies, while being fully GDPR compliant. Not having a cookie wall may also mean you have nothing to ask permission for. In other words: don't get a cookie wall just to appear compliant – it is more important to act privacy-friendly.

Note that most visitors will quickly click 'accept', whereas clicking 'Cookie Settings' would show that they would consent to storing 87 marketing cookies:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-14.46.52-Vd4o1rwmawBVD8L8UpEFL5N7AR8sH8kp9ypuxU8n8XtpGqD2JbZZn7NmZ8z2HGMd2yfOT0CtfUFJQIOZLw8A7zJgemSs1KDqTlqs.png)

Some reasons why you might want to use a cookiewall:

- You want to embed YouTube videos
- You want to optimize marketing campaigns by inserting conversion pixels (such as a Facebook Pixel)
- You want to use commecial third party tools for analytics & optimization

## Types of cookies

Cookiewalls typically distinguish between several kinds of cookies:

- **Necessary** cookies: cookies that are required for a website to work properly. These are set by default and users cannot reject them.
- **Preferences**: cookies that store user preferences for a website. Wings does not store these. If you use a cookiewall, the user preference (which types of cookies they consent to) is stored as a Preference cookie.
- **Statistics**: cookies that let you count and analyze visitor behaviour.
- **Marketing**: these cookies track visitors across websites, often to display ads and build user profiles. These are one of the most privacy-invasive.
- **Unclassified** or 'other': anything that does not fit in one of the above categories.

## How to configure a cookiewall

Cookiewalls are not served by Wings; you can use an independent service such as [Cookiebot](https://www.cookiebot.com/) or [Cookieyes](https://www.cookieyes.com). You may create an account there and configure your cookiewall. Some bits of advice:

- You may have to choose between 'explicit consent' and 'implied consent'. Explicit consent means that no cookies (except necessary ones) will stored unless the user gives active consent. This setting should reasonably be considered as necessary in order to comply with European GDPR law.
- The cookiewall will not show up on your temporary .app.wings.dev subdomain, unless you add that domain in your cookiewall settings.
- Feel free to play around with the settings, but most default settings will be fine.

## Implementing the cookiewall

We will use Cookiebot as an example. You will probably be asked to insert 2 script snippets:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-15.02.09-qnJ1GArd4Q8HoYWxYEayR8etoRbHb5WonRodN6B2STnthPwUqcVTCf9jg7E82oYApWVi48Jk47dL3FmwRu3MiypI0ymgeawAzs2f.png)

You can insert these script snippets in your [Wings admin interface](https://admin.wings.dev), if you go to 'Settings' -> 'Apps' -> 'Scripts'. Insert the first script into the 'head' location, and the second one in the 'body_end' location:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-15.03.36-FD6bqjd03qCvcVXnvvpMEEpurghbsM2peLRKVmnucUzPfvAi58uHl8o80YxZNkldOxIVuTtw2yfgfFzkZt3hTkgTVZH4r27dTKP4.png)

If you are visiting your Wings website using the same domain as you have configured in your cookiewall settings, you should see the cookiewall, which may look something like this:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-15.06.25-zeLsaXb4VKjVNelui6bkypusBBOmMWtZgRDvmqVl45gDor81lOLS8RWMjW8FDfzUFHL0zEqTj6qo52wm6S4IBeApuhWAENVpmZwZ.png)

After selecting one of the provided options, you will still see a small button in the bottom left. This is due to the second script you inserted:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-15.07.34-pJP7mWG0lfcmb8ZehhL2C4v2YuSdwxpjfYEDZT3n1K1w0Uw362X4vetzFLx9cY2XRDTh3OPQpPT5UhBUTFkXeO84Jnt3mq0fGXZE.png)

This will allow users to revisit their earlier preferences. When a user clicks this button, they may change their preferences or withdraw their consent altogether:

![](https://screens.wings.dev/CleanShot-2022-01-19-at-15.09.28-uttMWRNXWOCji993o37eC7lWx5TokoOFh8HpAJ01YYjpaPOQk4yT0iJJTDRZ2NzcspKJYtcvNlukZhxaFF2MhOKbBqrJaIlC89Ks.png)
