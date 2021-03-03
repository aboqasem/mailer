import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import Mail from 'nodemailer/lib/mailer';

class Mailer {
  private mail: Mail;

  constructor(email: string, password: string) {
    this.mail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });
  }

  send = (mailOptions: MailOptions) => {
    this.mail.sendMail(mailOptions).catch((e) => console.log);
  };
}

export default Mailer;
