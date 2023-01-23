import * as nodemailer from "nodemailer";
import { createTransport } from "nodemailer";

interface INodeMailer {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}

class NodeMailer {
  private mail_setting: INodeMailer = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL || "",
      pass: process.env.PASS || "",
    },
  };
  private transporter: nodemailer.Transporter;

  private mailOptions: any;

  constructor() {
    this.transporter = createTransport(this.mail_setting);
  }

  public sendMail = (numOTP: number, method: string, user: string) => {
    if (method === "login") {
      this.mailOptions = {
        from: this.mail_setting.auth.user,
        to: user,
        subject: "OTP Bisikin",
        html: `
          <div
            class="container"
            style="max-width: 90%; margin: auto; padding-top: 20px"
          >
              <h2>Hey this is your OTP to continue login</h2>
              <h4>Type this OTP on your OTP screen</h4>
              <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
              <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${numOTP}</h1>
          </div>
          `,
      };
    } else {
      this.mailOptions = {
        from: this.mail_setting.auth.user,
        to: user,
        subject: "OTP Bisikin",
        html: `
          <div
            class="container"
            style="max-width: 90%; margin: auto; padding-top: 20px"
          >
              <h2>Welcome to Bisikin.</h2>
              <h4>Now your is our member</h4>
              <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
              <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${numOTP}</h1>
          </div>
          `,
      };
    }
    this.transporter.sendMail(this.mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  };
}

export default new NodeMailer();
