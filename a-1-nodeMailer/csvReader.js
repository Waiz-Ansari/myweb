// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'waizansari0git@gmail.com',
//       pass: 'bosfnaocbzzdztzs'
//     }
//   });


//   module.exports =  transporter


const fs = require('fs');
const csv = require('csv-parser');
                const sendEmail = require('./emailSender');

function readCsvAndSendEmails(file_name) {
  fs.createReadStream(file_name)
    .pipe(csv())
    .on('data', (row) => {
      const email = row.Email;
      console.log(email);

      sendEmail(email);
    })
    .on('end', () => {
      console.log('Finished sending emails.');
    });
}

module.exports = readCsvAndSendEmails;
