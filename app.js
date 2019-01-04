//import { environment } from './environments/environment';
// const environment = require('environment');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    status: 'hello all'
  });
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Імя клієнта: ${req.body.name_customer}</li>
      <li>Адреса доставки: вулиця ${req.body.address_customer}</li>
      <li>будинок: ${req.body.house}</li>
      <li>квартира: ${req.body.room}</li>
      <li>Телефон: +38 ${req.body.phone}</li>
      <li>Продукт: ${req.body.name_product}</li>
      <li>Вибір оплати: ${req.body.payment}</li>
      <li>Ціна: ${req.body.price} грн</li>
    </ul>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: ''  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false // only for localhost, need to be removed in production
    }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact"', // sender address
    to: '', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
});

app.post('/send-restaurant', (req, res) => {
  console.log('debug data ', JSON.stringify(req.body.name_product));
  const output = `
    <p>У вас нове замовлення</p>
    <h3>Деталі замовлення</h3>
    <ul>
      <li>Імя клієнта: ${req.body.name_customer}</li>
      <li>Адреса доставки: ${req.body.address_customer}</li>
      <li>будинок: ${req.body.house}</li>
      <li>квартира: ${req.body.room}</li>
      <li>Телефон: +38 ${req.body.phone}</li>
      <li>Продукт: ${JSON.stringify(req.body.name_product)}</li>
      <li>Вибір оплати: ${req.body.payment}</li>
      <li>Ціна: ${req.body.price} грн</li>
    </ul>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'powerfood.deliv.rest@gmail.com', // generated ethereal user
      pass: ''  // generated ethereal password
    }
    // tls:{
    //   rejectUnauthorized:false // only for localhost, need to be removed in production
    // }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <powerfood.deliv.rest@gmail.com>', // sender address
    to: '', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    // console.log('Message sent: %s', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
});

// callback
app.post('/callback', (req, res) => {
  const output = `
    <p>Замовлення зворотнього дзвінка</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Імя клієнта: ${req.body.name_customer}</li>
      <li>Телефон: +38 ${req.body.phone}</li>
    </ul>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: ''  // generated ethereal password
    }
    // tls:{
    //   rejectUnauthorized:false // only for localhost, need to be removed in production
    // }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact"', // sender address
    to: '', // list of receivers
    subject: 'Node Contact Request Callback Form', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
});

app.listen(3000, () => console.log('Server started...'));