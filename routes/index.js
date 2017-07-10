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

router.get('/projects_1', function(req, res, next){

  let templateVars = {};
  knex('projects')
  .then((results)=> {
    let templateVars = {title: "Projects", data:results};
    console.log(results)
  res.render('projects', templateVars);
  }).catch((e) =>{
    console.log(`Failed to get data from database: ${e}`)});
});

router.get('/projects_2', function(req, res, next){

  let templateVars = {};
  knex('projects')
  .then((results)=> {
    let templateVars = {title: "Projects", data:results};
    console.log(results)
  res.render('projects_2', templateVars);
  }).catch((e) =>{
    console.log(`Failed to get data from database: ${e}`)});
});

router.get('/javascript', function(req, res, next){
  res.render('javascript', {title: 'Javascript 30'})
});

router.get('/python', function(req, res, next){
  res.render('python', {title: 'Python Focus'})
});

router.get('/jungle', function(req, res, next){
  res.render('jungle', {title: 'Jungle App: E-commerce'})
});

router.get('/face', function(req, res, next){
  res.render('face', {title: 'Face Replace Final'})
});

router.get('/chatty', function(req, res, next){
  res.render('chatty', {title: 'React: Chatty App'})
});
router.get('/tweeter', function(req, res, next){
  res.render('tweeter', {title: 'Tweeter: Twitter Replica'})
});

router.get('/pickup', function(req, res, next){
  res.render('pickup', {title: 'Food Pickup'})
});

router.get('/calculator', function(req, res, next){
  res.render('calculator', {title: 'Calculator Test'})
});

router.get('/python_1', function(req, res, next){
  res.render('python_1', {title: 'Python Focus'})
});

router.get('/javascript_1', function(req, res, next){
  res.render('javascript_1', {title: 'Javascript 30'})
});
router.get('/javascript_2', function(req, res, next){
  res.render('javascript_2', {title: 'Javascript 30'})
});
router.get('/javascript_3', function(req, res, next){
  res.render('javascript_3', {title: 'Javascript 30'})
});




router.get('/about', function(req, res, next){
  res.render('about', {title: 'About Me'})
});

router.get('/progress', function(req, res, next){
  res.render('progress', {title: 'Progress'})
});


return router;

}
