// // var nodemailer = require('nodemailer');

// // var transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'waizansari0git@gmail.com',
// //     pass: '#waiz123&ansarigit'
// //   }
// // });

// // var mailOptions = {
// //   from: 'waizansari0git@gmail.com',
// //   to: 'sohaibullah48@gmail.com',
// //   subject: 'Sending Email using Node.js',
// //   text: 'That was easy!'
// // };

// // transporter.sendMail(mailOptions, function(error, info){
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log('Email sent: ' + info.response);
// //   }
// // });



// // // -----send email


// // // var mailOptions = {
// // //   from: 'youremail@gmail.com',
// // //   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
// // //   subject: 'Sending Email using Node.js',
// // //   text: 'That was easy!'
// // // }



// const fs = require('fs');
// const csv = require('csv-parser');
// const nodemailer = require('nodemailer');

// // Read the CSV file and parse it using the csv-parser package
// fs.createReadStream('path/to/file.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     // Set up the email transport using Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your_email@gmail.com',
//         pass: 'your_password'
//       }
//     });
    
//     // Create the email message using the data from the CSV file
//     const message = {
//       from: 'your_email@gmail.com',
//       to: row.email,
//       subject: 'Test Email',
//       text: `Hello ${row.name},\n\nThis is a test email sent from Node.js.\n\nThank you!`
//     };
    
//     // Send the email using the transporter
//     transporter.sendMail(message, (error, info) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(`Email sent: ${info.response}`);
//       }
//     });
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });






















// const fs = require('fs');
// const csv = require('csv-parser');
// // const nodemailer = require('nodemailer');
// // const transporter = require("./config")
// // const email = require("./email")
// // const $ = cheerio.load(html);

// // // Extract the CSV data from the HTML table
// // const csvData = [];
// // $('table tr').each((index, element) => {
// //   const row = {};
// //   $(element).find('td').each((i, el) => {
// //     row[`column${i+1}`] = $(el).text().trim();
// //   });
// //   csvData.push(row);
// // });










// //Nodemailer transporter using email service provider details
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: 'waizansari0git@gmail.com',
// //     pass: 'bosfnaocbzzdztzs'
// //   }
// // });

// const file_name = "waiz.csv"
// const response = require('./email');
// // read the CSV file and send email to each email address

// const readFile = fs.createReadStream(file_name)
//   .pipe(csv())
//   .on('data',response)
//   .on('end', () => {
//     console.log('Finished sending emails.');
//   });








const readCsvAndSendEmails = require('./csvReader');

const file_name = "waiz.csv";
readCsvAndSendEmails(file_name);