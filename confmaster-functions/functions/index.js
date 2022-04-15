const functions = require("firebase-functions");
const cors = require('cors')

const app = require('express')(); //import express to clean up data functions
app.use(cors())

const {getTasks, postTask} = require('./handlers/tasks');
const {signup, login, uploadPicture, addUserInfo} = require('./handlers/users');

app.all('/', function(req, res, next) {
  req.set('Access-Control-Allow-Origin', '*');
  req.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  req.set('Access-Control-Allow-Headers', '*');
  next();
});

  //Tasks routes
  app.get('/tasks', getTasks);
  app.post('/task', postTask);

  //Users routes
  app.post('/signup', signup);
  //app.post('login', login);
  app.post('/user/picture', uploadPicture) //TODO: add FBAuth to make sure no one can upload an image without login
  //app.post('/user', addUserInfo); //TODO: add FBAuth to make sure no one can upload user information without being logged in
  


 //Data requests route through api
exports.api = functions.region('europe-west1').https.onRequest(app);