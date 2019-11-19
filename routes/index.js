var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', (req, res) => {
  res.render('about');
});


router.get('/terms-of-service', (req, res) => {
  res.render('terms-of-service');
});


router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});




router.get('/contact', (req, res) => {
  res.render('contact');
});




module.exports = router;
