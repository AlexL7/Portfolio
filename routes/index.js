var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alexander Lock' });
});

router.get('/home', function(req, res, next){
  res.render('index', {title: 'Alexander Lock'})
});

router.get('/work', function(req, res, next){
  res.render('work', {title: 'Alexander Lock'})
});

router.get('/about', function(req, res, next){
  res.render('about', {title: 'Alexander Lock'})
});

router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Alexander Lock'})
});

module.exports = router;
