import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { validate as isEmail } from 'isemail';
import Mailer from './mail/Mailer';
import { Attachment } from 'nodemailer/lib/mailer';
import TextStyles from './TextStyles';

dotenv.config();

const { NAME: name, EMAIL: email, PASS: pass, SUBJ: subject, ATTACHMENTS } = (process.env as unknown) as Env;

const mailer = new Mailer(email, pass);

const receivers = fs.readFileSync('receivers.txt').toString().split('\n');
const emailContent = fs.readFileSync('email.html').toString();
const attachments: Attachment[] =
  ATTACHMENTS?.split(',').map((a) => ({
    filename: path.basename(a),
    path: a,
  })) || [];

receivers.map((to) => {
  if (isEmail(to)) {
    mailer.send({
      from: `${name} ${email}`,
      to,
      subject,
      html: emailContent,
      attachments,
    });
  } else {
    console.log(TextStyles.red(`${to} is not an email.`));
  }
});
