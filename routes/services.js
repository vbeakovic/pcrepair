const express = require('express');
const fs = require('fs');
var router = express.Router();

var results;
fs.readFile('json/services.json', 'utf8', function(err, data) {
  if (err) {
    throw err;
  } else {
    results = JSON.parse(data);
  }
});

router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    isServices: true,
    services: results,
    currentYear: new Date().getFullYear()
  });
});

module.exports = router;
