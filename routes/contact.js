const express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    isContact: true,
    currentYear: new Date().getFullYear()
  });
});

// send email
router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '', // insert email
      pass: ''  // insert password
    }
  });
  var mailOptions = {
    from: '"Valter Beaković" <valter.beakovic@gmail.com>',
    to: 'valter@abeona.hr',
    subject: 'Hello from PCRepair',
    text: 'You have a submission from... Name: ' + req.body.name + 'Email: ' + req.body.email + 'Mesagge: ' + req.body.message,
    html: '<p>You have a submission from...</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Mesagge: ' + req.body.message + '</li></ul>',
  }
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message Sent: ' + info.response);
    res.redirect('/');
  });
});

module.exports = router;
