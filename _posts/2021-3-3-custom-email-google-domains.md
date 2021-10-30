---
title: How to get free business email with Google Domains
category: Work
layout: post
---

Have you bought a domain on Google domains? Wondering if you should pay for GSuite email. **You don't need to.** You just need to setup an alias.

## What is an email alias

An email alias maps an email (sth@yourdomain.com) to your personal email (sth@gmail.com). This is cool because you don't need to pay for this and hosting is taken care of by gmail. Sounds too good to be true. _It isn't._

## The catch

**You can only add up to 100 aliases**, so keep this in mind.

## Prerequisites

*   A domain purchased from [Google Domains](https://domains.google.com)
*   An email account at [Gmail](https://gmail.com)

## Setting Up

Go to your registrar page in Google Domains. Select the domain you want to setup email with. Select the email tab. ![](https://blog.siddharth.one/email-alias/photo.jpeg) Scroll down to "Email Forwarding" and click the button that says "Add Alias". In the first box, fill in the value you want the email address to be (info, hello, etc.). Then, in the second box, fill in your current gmail address. You should receive an email asking you to confirm. Click confirm, and you should be set. Test it. It should work!

## Sending from the alias

But how can we send email from this new email address. This will require some work and can vary based on device. First you will need to generate an app password from your google account settings (Account > Security). Store this password. We will need it later. Click add a new account in your email client's settings. Then click other. Choose IMAP from the options on your device, and fill in the following details.

*   Incoming mail server: imap.gmail.com
*   Outgoing mail server: smtp.gmail.com
*   Name: Whatever name you want your recipients to see
*   Username: Your google username excluding @gmail.com
*   Password: Your 16-digit generated app password
*   Port for IMAP: 993
*   Port for SMTP: 587

Login and Voila! You should be able to send from your email alias.

Thanks for reading. If you enjoyed this article follow me on [Twitter](https://twitter.com/sidchaudhary04).
