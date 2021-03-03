import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import Mailer from './mail/Mailer';
import { Attachment } from 'nodemailer/lib/mailer';
import TextStyles from './TextStyles';
import { sleep } from './utils';

dotenv.config();

const { NAME: name, EMAIL: email, PASS: pass, SUBJ: subject, ATTACHMENTS } = (process.env as unknown) as Env;

const mailer = new Mailer(email, pass);

const receivers = Array.from(new Set(fs.readFileSync('receivers.txt').toString().split('\n')));
const emailContent = fs.readFileSync('email.html').toString();
const attachments: Attachment[] =
  ATTACHMENTS?.split(',').map((a) => ({
    filename: path.basename(a),
    path: a,
  })) || [];

(async () => {
  for (const to of receivers) {
    if (to !== '') {
      await mailer.send({
        from: `${name} ${email}`,
        to,
        subject,
        html: emailContent,
        attachments,
      });
      await sleep(1000);
    }
  }
})();
