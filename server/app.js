/**
 * Created by valdemar on 09.06.18.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Address: ${req.body.address}</li>
      <li>Mobile: ${req.body.mobile}</li>
    </ul>
  `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'testmail@gmail.com', // generated ethereal user
        pass: 'password'  // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false // only for localhost, need to be removed in production
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer Contact" <z_valdemar@ukr.net>', // sender address
    to: 'valdemarrr26@gmail.com', // list of receivers
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

    res.render('contact', {msg:'Email has been sent'});
});
});

app.listen(3000, () => console.log('Server started...'));
