var express = require('express');// obtaining express
var url = require('url');// obtaining url
var mongoose = require('mongoose'); // obtaining mongoose
var nodemailer = require('nodemailer');
var app = express();
// database connection error
mongoose.connect('mongodb://localhost:27017/friendzone',function(error){
    if(error){
      console.log(error);
    }
});

//Schema
var Schema = mongoose.Schema;
var useraccountSchema = new Schema({
  username: String,
  screenname: String,
  password: String,
  socket: String,
  friendlist: String[],
  ignorelist: String[],
  email: String,
  avatar: null,
  status: String
});

var authenticateSchema = new Schema({
  username: String,
  password: String,
  email: String,
  confirmationNumber: String
});

var useraccount = mongoose.model('useraccount', useraccountSchema);
var authenticate = mongoose.model('authenticate', authenticateSchema);

//functions
app.get('/password', function(req,res){
  useraccount.findOne({username: req.params.username}, 'check password', function (err, user) {
    if (err) res.send(false);
    console.log('Returned ' + user.username);
    if(user.password == req.params.password)
    {
      res.send(true)
    }
    else
    {
      res.send(false);
    }
  });


});

app.get('/username',function(req,res){
  useraccount.findOne({username: req.params.username}, 'check password', function (err, user) {
    if (err) res.send(false);
    console.log('Returned ' + user.username);
    res.send(true);
  });
});

app.get('/email', function(req.res){

});

app.get('/icon_list', function(req,res){
    var UserIcon = {};
    user.forEach()
});

app.get('/friends', function(req,res){
  useraccount.findOne({username: req.params.username}, 'check password', function (err, user) {
    if (err) res.send(null);
    res.send(user.friendlist);
  });
});

app.get('ignoredList', function(req,res){
  useraccount.findOne({username: req.params.username}, 'check password', function (err, user) {
    if (err) res.send(null);
    res.send(user.ignorelist);
  });
});

app.get('/new_user', function(req,res){
});

app.get('/user_profile_change', function(req,res){
});

app.get('/user_profile_change',function(req,res){
});

app.get('/friend_video', function(req, res){
  useraccount.findOne({username: req.params.username}, 'check password', function (err, user) {
    if (err) res.send(null);
    res.send(user.socket);
  });
});
