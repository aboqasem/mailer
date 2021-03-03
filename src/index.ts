import fs from 'fs';
import dotenv from 'dotenv';
import { validate as isEmail } from 'isemail';
import Mailer from './mail/Mailer';

dotenv.config();

const { NAME: name, EMAIL: email, PASS: pass, SUBJ: subject } = (process.env as unknown) as Env;

const mailer = new Mailer(email, pass);

const receivers = fs.readFileSync('receivers.txt').toString().split('\n');
const emailContent = fs.readFileSync('email.html').toString();

receivers.map((to) => {
  if (isEmail(to)) {
    mailer.send({
      from: `${name} ${email}`,
      to,
      subject,
      html: emailContent,
    });
  }
});
