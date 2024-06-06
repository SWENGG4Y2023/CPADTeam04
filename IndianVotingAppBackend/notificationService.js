const nodemailer = require('nodemailer');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    type: "OAuth2",
    user:  process.env.GMAIL_ID,
    clientId:  process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET ,
    refreshToken:  process.env.REFRESH_TOKEN
  }
});


const sendEmail = (to, message) => {
  const mailOptions = {
    from: process.env.GMAIL_ID,
    to: to,
    subject: 'Vote Acknowledgment',
    text: message
  };
  transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };