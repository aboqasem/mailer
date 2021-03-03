import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import Mail from 'nodemailer/lib/mailer';
import TextStyles from '../TextStyles';

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
    const { subject, to } = mailOptions;
    this.mail
      .sendMail(mailOptions)
      .then((v) => {
        console.log(TextStyles.blue(`Successfully sent ${subject} to ${to}!`));
      })
      .catch((e) => {
        console.log(TextStyles.red(`Could not send ${subject} to ${to}!`));
        console.log(e);
      });
  };
}

export default Mailer;
