const express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('about', {
    title: 'About',
    isAbout: true,
    currentYear: new Date().getFullYear()
  });
});

module.exports = router;
