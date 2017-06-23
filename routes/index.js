var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = (knex) => {

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alexander Lock' });
});

router.get('/home', function(req, res, next){
  res.render('index', {title: 'Alexander Lock'})
});

router.get('/projects', function(req, res, next){

  let templateVars = {};

  knex('projects')
  .then((results)=> {
    let templateVars = {data:results};
    console.log(results)
  res.render('projects', templateVars);
  }).catch((e) =>{
    console.log(`Failed to get data from database: ${e}`)});
});


router.get('/about', function(req, res, next){
  res.render('about', {title: 'Alexander Lock'})
});

router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Alexander Lock'})
});

return router;

}
