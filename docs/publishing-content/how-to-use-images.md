---
sidebar_position: 1
---

# How to use images

Here is some information about how to use images.

## Content images

Images that you display on a page or an article using a content card will never be cropped – it will only be _resized_ to a certain width. This means it will always be displayed in its entirety. A few tips:

- As a rule of thumb, resize images to a width of about 1600 pixels before uploading them to Wings.
- You may optimize the file size further by using a service such as [TinyPNG](https://tinypng.com).

## Campaign header images

Campaigns (petitions, fundraisers, events and signups) may have a header image. It is important to understand the following:

- part of this image will be invisible, as the campaign form will be superimposed on it;
- the part that will be invisible will vary, based on the screen size /dimensions;

![](https://screens.wings.dev/CleanShot-2021-10-25-at-14.24.52-8UItkF6DbH3NyvRYlWHAudIgP4E9beC6H0tWY6aDLtARVuoqXwfmmUd4vK1cgJkQctF0b9b5MxDY1yOuCh2Mie9pkeFM8jfG3HFZ.gif)

- The same image will be used on the `/confirmed/` page that users will see after clicking the confirmation link in the email they will receive
- Generally speaking, the header image should be illustrative; it is best not to rely on it to display crucial information.
- It is best to use an imag with landscape orientation, for example `1600 x 900 px`.

![](https://screens.wings.dev/CleanShot-2021-10-25-at-14.29.34-2x-sUAlUjEOy6xV9CKDPvfEuZB47W4MCymk3qiywybRlshjf87gRUYG1NtMHxY1485enIv6VdoJCbaH24DO9giJJkNb4UXiTS55ZJkw.png)

## Article header images

Article header images have the same issue: their purpose is to fill up the entire browser window regardless of screen size or resolution, so a part of the image will always appear cropped.

![](https://screens.wings.dev/CleanShot-2021-10-25-at-14.44.44-p9VxI7cO7nv0Fxc9R45DclHC1eLqjfz9jvQdS8Oo5UPX48d8HMoxHDgP7j1WQIxOJQTMbKIwfx1kD5gACaiHKSPv1YANj2uO2WlX.gif)

This is _by design_ – if you do not want to use it, simply do not set a header image. It is advisable not to rely on the image to display critically important visual content, as it may not be visible to some users, depending on their screen size & dimensions.

## Featured images

If you use a [Nodes card](publish-articles-and-pages#nodes) to show a grid of pages, articles or campaigns, the **featured image** will be displayed:

![](https://screens.wings.dev/CleanShot-2021-10-25-at-14.53.04-aHsdaes53XVWBR9vkPrQbLxWePUCOs9TccEDMSMUEXedGVaeOyo5N7Borb7JGFj1xbYHWUYWmobLrq3DJvmw3c0NpI6WoeIq44TG.gif)

The image displayed here will be shown as a card of 366 x 489 pixels, part of which will be invisible, as a rectangle with the title (and on hover, a description) will be superimposed on it. Wings will crop the image, but if you want to have full control over the image, use a 732 \* 978 sized image, and consider that the lower part with a height of 338px will not be visible upon hover. You may also [download this PSD template](https://screens.wings.dev/wings-featured-image-template-uWCZ8mTfs0rZgkzldE8xINFIJBuJcKQlUY6IMoFUClkIPdUtFnQGiEwISyUgXSYZAHnde3gUSJuGrSQrGhJ9QB1Ew01mmCC0Fh4e.psd).
