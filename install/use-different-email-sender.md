# Use a different email sender

As described in [Architecture](docker-architecture), thanks to a local mail service, Jeyser can directly send emails from the server it's installed on.

However, in some cases emails sent by Jeyser are not correclty received by recipients.
Begin by checking Spam folder in case Jeyser emails would have been incorrectly flagged as spam. 

One of the option to work around this issue is to use an external email sender, in replacement of the mailer container.

This page describes how to use Mailjet as external email sender. Feel free to pick any other mail service that suit you best.

1. Create a Mailjet account. the free plan should be largely enough to cover your needs.
2. Log in with your newly created account
3. Mailjet guides to get you started are quite good, following them should be easy enough.
   Keep in mind that from Mailjet perspective, you are a developer.
4. The Getting started guide will ask you about the "Send method" to send your emails. Select `SMTP Relay`
5. Copy the credentials similarly to image below:

<img src="images/mailjet-credentials.png" alt="Mailjet credentials screen" />

6. SSH to the machine hosting your Jeyser installation and browse to Jeyser folder
7. Edit `.env` file and replace `MAILER_URL=smtp://mailer:25` by `MAILER_URL=smtp://user:password@in-v3.mailjet.com:587`.
8. Execute command `docker-compose up -d web` to recreate web container with new mailer value
9. Optionally you can stop mailer container by running `docker-compose stop mailer`
10. You can improve email reception rate by following other Mailjet tutorials on DKIM and DMARC but this is out of the scope of this documentation.
11. You can test the mail setup by creating a new user account. Jeyser should not return any error and you should see the mail in your Mailjet stats.
