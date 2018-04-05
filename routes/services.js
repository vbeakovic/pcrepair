const express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    isServices: true,
    currentYear: new Date().getFullYear()
  });
});

module.exports = router;
