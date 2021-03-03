# Mailer

Send emails.

## Usage

- Copy `.env.example` to `.env` and modify it:

  - `NAME`: your name.
  - `EMAIL`: your email.
  - `PASS`: create an app password from your account to avoid 2FA, [for Gmail](https://support.google.com/accounts/answer/185833?hl=en).
  - `SUBJ`: email subject.
  - `ATTACHMENTS`: optional paths to attachments, separated by commas. For e.g. `/Path/to/a1,../path/to/a2`.

- Copy `receivers.example.txt` to `receivers.txt` and modify it:

  - Receiver emails separated bby newline.

- Copy `email.example.html` to `email.html` and modify it:

  - The email body.

- Run `npm i` then `npm start`.
