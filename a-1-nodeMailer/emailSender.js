// const transporter = require("./config")
// const fs = require("fs")
// const html = fs.readFileSync('html.html', 'utf-8');

// const response = (row) => {
//     const email = row.Email;
//     console.log(email);

//     // setup email message
//     // const html = "html.html"
//     const message = {
//       from: 'waizansari0git@gmail.com',
//       to: email,
//       subject: 'Hello from waizansari0git@gmail.com',
//     //   text : ` ${email}`
//       html: html
//     };
    
//     // send email
//     transporter.sendMail(message, (error, info) => {
//       if (error) {
//         console.log(`Error sending email to ${email}: ${error}`);
//       } else {
//         console.log(`Email sent to ${email}: ${info.response}`);
//       }
//     });
//   }
//   module.exports = response;



const fs = require ("fs")
const nodemailer = require('nodemailer');

// Nodemailer transporter using email service provider details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'waizansari0git@gmail.com',
    pass: 'bosfnaocbzzdztzs'
  }
});

function sendEmail(email) {
  // setup email message\
  const html = fs.readFileSync('html.html', 'utf-8');
  const message = {
    from: 'mujeebburiro778@gmail.com',
    to: email,
    subject: 'Hello from mujeebburiro778@gmail.com',
    html :html
  };

  // send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(`Error sending email to ${email}: ${error}`);
    } else {
      console.log(`Email sent to ${email}: ${info.response}`);
    }
  });
}

module.exports = sendEmail;
