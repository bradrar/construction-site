var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', (req, res) => {
  res.render('about');
});


router.get('/services', (req, res) => {
  res.render('services');
});


router.get('/projects', (req, res) => {
  res.render('projects');
});



router.get('/news', (req, res) => {
  res.render('news');
});



router.get('/careers', (req, res) => {
  res.render('careers');
});



router.get('/contact', (req, res) => {
  res.render('contact');
});




module.exports = router;
