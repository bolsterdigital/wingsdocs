---
sidebar_position: 3
title: Create a fundraiser
---

# How to create a fundraiser
So, you want to create a fundraiser campaign? Here, you will find all the necessary steps you have to take.

## 1. Configure your payment processor
In order to receive payments, you have to connect Wings to a payment processing service. 

### Create an account at Stripe or Mollie

We currently support [Stripe](https://stripe.com) and [Mollie](https://www.mollie.com/). Mollie offers slightly more European payment methods out of the box.

:::tip Note:
Users will submit a campaign form on your Wings website, but will be temporarily redirected to a secure payment environment by Stripe or Mollie to make the actual payment, before being sent back to Wings. Wings will store a record of the form submission and transaction – which allows you to process user information such as email signups for users making a donation – but the _money itself_ goes directly to you own Stripe or Mollie account.
:::

### Look op your Stripe or Mollie credentials.

- [see here](https://help.mollie.com/hc/en-us/articles/115000328205-Where-can-I-find-the-live-API-key-) how you can find your API key.
- Please visit [this Stripe web page](https://stripe.com/docs/keys) for more information.


### Enter your credentials in Wings
Head over to Settings -> Commerce to fill out your credentials. 

![](https://screens.wings.dev/CleanShot-2020-03-13-at-09.11.43-1584087129.png)

:::note Note:
If you save your Mollie key and the Wings admin interface shows that it is 'busy', it is probably successfully saved. Just close the dialog window and you should be OK.
:::

## 2. Create a fundraiser campaign
Head over to Campaigns and choose New -> Fundraiser:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.33.33-HQ1p6SgIyblOQMwFLFhHl35eaxdCyIeheH9QBzdIre9jRko65idzfVmnkXp5Qto34NrpjSXJT6r4cY7I3MFoCSeS81J55E8S3nUC.png)

### Fill out the main copy
Write the copy that will be displayed alongside the donation form:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.36.09-VCR47jRs9ddPGZZvaqMPk7Wts23QRXJIOOEGf5w3ekTViXxEmEan7LVUzBkNAMO5SRlSgHT2W81T1dcYxtJdOWYXFNyxzp8zGkJC.png)

The copy will be displayed like so:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.37.12-1KZW1KDOjlG3n2FUw8q0QaohfdY4bE0fX3OGOd01y24XTvsymdB5HCX3m07SZf57btNRdpGwIyDz9p2YIEnJu652Chj6CO5Gulkg.png)

### Set a header image
Pick a nice image you want to use as a header image:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.47.39-jzta6DLdd2FobEIngJU2lLtIBK2tvC5qHwa5b6QNbyzoBpCYAKbIJXi8D5RWlJqbzLdwrhaRiyJA8RTLNNLi8hfkfujmPseyKmI3.png)

### Customize the microcopy
You may want to customize the default copy strings such as the `... has been donated to this fundraiser` bit. Head over to the Copy tab to do that, and submit any string you want to customize:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.44.54-9CpyUSdVC7rkXUPeQuzm8DpkZEo23giH4VEkqruELfd3u4JdBrOMjueggR8sPSzPp0PZ6CCE4J6zcLMu24ccdOlWyoCflZw0PtF1.png)

The result:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.46.24-kesGdEjltL1DlA0xgAssfk4HeBEPAvpoJafI9ilnsDfP3TPNoEgKJYZXs3ZPetZMolY7YW1e9wk2GOSn1wYbEuwhObOL0JBDNCeS.png)

## 3. Fine-tune the settings
Now, it is time for some additional configurations.



### Configure the counter
If you want to display the counter and set a target, you have to fill it out manually:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.38.44-iwzEFf2ymnxJ72jtn3SyNMtaH867USsuddq4XXXQfR4o20mg8ShgEXXc9FzaB9cAPgdlCPXYLSsQ759WppE1mhOoynSlAupStPJS.png)

Head over to the Settings -> Fundraiser Options tab to either 1) disable the 'money raised' count and thereby hiding the counter entirely, or optionally 2) offset the displayed amount by any number.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.40.27-HN3UeonGd9U6G5eHtlp5ZzRsHhBIVR8qfK0BkvaEMyzcARSWiBgdcSp0GrNy4Vmckf8DohopLArR1OFNzqh4Z4qV3jg22wdImmur.png)

With a target of € 10.000 and a manual offset of € 250, your counter will look like this:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.42.14-v14EoNXFqDQoCco8jXf2ucs0y74MeI83iHUnpa48a1hB15rH4xbVk2QbhtdXoIJf3DzOwMIjNhCtRKwpmYakaXNbcaxPYuW1FLfF.png)

### Add custom fields
If you want to collect more information than just name and email address, you can optionally add custom fields at the 'Fields' section.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.43.20-R5ARrZk3pC9OV8ZKJ5sarquTvou15Vg1GHZkDgjl9iw4vmgaReTDd81pebQjt8gaUcWyL0YnT8dfHGeC9mSWTB8ViI9DIs5B701V.png)

### Configure Terms & Conditions and Privacy settings

On the Settings -> Legal tab, you can:

1. Disable the Terms & Conditions field if you don't have it
2. Customize the Privacy Policy url or path if the default (which is usually `/privacy`) is incorrect.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-12.02.27-g4mf3ZHZuWp5YgwJzx6iUWRJq9zcAz1QAkMYV4iOPEI2oQ9vAuU8xamcX9ARXrzyE4qLQz3CQAWZkR29ri5Mhfww9O8uJx2fN83Q.png)


## 4. Optimize it for search engines and social media
Go to the Platforms tab to configure text and images for search engines and social media:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.49.53-IrnuDWOMjsorMQXOyEAtz8QH4Wl3pzXnJeov9oFn1vzLLMsrz9TZhS2LcNDbGPDpA4UJRyaiiRoYsOrWIwGwuAi1dY8IK6QMs6Jf.png)

## 5. Publish it
Start by actually publishing your fundraiser campaign:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.51.35-LFi3fvM1gQcipeIp8t2d4w0wuYmEAiIkhPIy5q0b5eAfJPT1RV3AndhGy5h2mpqcCOwxPwEKeATrc5FuxjpqJIrDAjIDyrAHltwd.png)

Then, you can use its own automatically generated page, which you will find by clicking here: 

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.52.44-ZkYrW76ODxqfTONCdwQtMJ5GIsO3n3wEiTbuJC2bPDmAqCio1q4xrrwlM17OnfvxRknhWvNKzOVCckRIDYaJjE9gE2dJpjKhv0nc.png)

Or, you can use a campaign card on a Page or Article and insert it there:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.53.57-72FgfyUz5JrRHftqAUNY78HDM1FE9qFsIxFipBp33jfUZoExVJIsRlmSmaCfzmTC3ibLhU25qNFnDlHecYKQLyky8nc37COjEYrU.gif)

Then, you're done. Good luck launching your fundraiser!