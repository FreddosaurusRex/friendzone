

// all required modules listed in package
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var fd = require('fd');
var path = require('path');
var http = require('http');
var url = require('url');
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var app = express();



app.use(express.static(path.join(__dirname + '/')));


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
module.exports = app;

var router = express.Router();

var default_login = [
  {"username": "admin", "password": "password"},
  {"username": "oneone", "password": "two"},
  {"username": "BENKIL",  "password": "BENKIL"},
  {"username": "billie",  "password": "billie"},
  {"username": "ono1123",  "password": "ono1123"},
  {"username": "carlbb",  "password": "carlbb"},
  {"username": "gehah89",  "password": "gehah89"},
  {"username": "xxxsdr",  "password": "xxxsdr"},
  {"username": "ghostboy",  "password": "ghostboy"},
  {"username": "holdover",  "password": "holdover"},
  {"username": "jiminie",  "password": "jiminie"},
  {"username": "harry_potter",  "password": "harry_potter"},
  {"username": "hopalong",  "password": "hopalong"},
  {"username": "tupack",  "password": "tupack"},
  {"username": "shitty",  "password": "shitty"},
  {"username": "kennywayne",  "password": "kennywayne"},
  {"username": "username",  "password": "username"},
  {"username": "pickfour",  "password": "pickfour"},
  {"username": "no_name",  "password": "no_name"},
  {"username": "OMGOMG",  "password": "OMGOMG"}
];


var user_setting = [
  {"username": "admin", "password": "password", "email": "xxx@zz.yyy", "screenname": "Admin105", "icon": "images/icons/Spider-Man Old-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "oneone", "password": "password", "email": "xxx@zz.yyy", "screenname": "three", "icon": "images/icons/OptinMonster-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "BENKIL", "password": "password", "email": "xxx@zz.yyy", "screenname": "BENKIL", "icon": "images/icons/AngelList-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "billie", "password": "password", "email": "xxx@zz.yyy", "screenname": "billie", "icon": "images/icons/Black Tie-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "ono1123", "password": "password", "email": "xxx@zz.yyy", "screenname": "ono1123", "icon": "images/icons/Cylon Head New-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "carlbb", "password": "password", "email": "xxx@zz.yyy", "screenname": "carlbb", "icon": "images/icons/Drupal-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "gehah89", "password": "password", "email": "xxx@zz.yyy", "screenname": "gehah89", "icon": "images/icons/Hangar-48.png", "online": false, "status": "offline"},
  {"username": "xxxsdr", "password": "password", "email": "xxx@zz.yyy", "screenname": "xxxsdr", "icon": "images/icons/Hellraiser Pinhead-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "ghostboy", "password": "password", "email": "xxx@zz.yyy", "screenname": "ghostboy", "icon": "images/icons/Jason Voorhees-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "holdover", "password": "password", "email": "xxx@zz.yyy", "screenname": "holdover", "icon": "images/icons/Opencart-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "jiminie", "password": "password", "email": "xxx@zz.yyy", "screenname": "jiminie", "icon": "images/icons/Pied Piper 2-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "harry_potter", "password": "password", "email": "xxx@zz.yyy", "screenname": "harry_potter", "icon": "images/icons/Pied Piper-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "hopalong", "password": "password", "email": "xxx@zz.yyy", "screenname": "hopalong", "icon": "images/icons/Sauce-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "tupack", "password": "password", "email": "xxx@zz.yyy", "screenname": "tupack", "icon": "images/icons/SlideShare-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "shitty", "password": "password", "email": "xxx@zz.yyy", "screenname": "shitty", "icon": "images/icons/Space Shuttle-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "kennywayne", "password": "password", "email": "xxx@zz.yyy", "screenname": "kennywayne", "icon": "images/icons/Spawn-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "username", "password": "password", "email": "xxx@zz.yyy", "screenname": "username", "icon": "images/icons/Spider-Man Head-48.png", "online": false, "status": "offline", "visible": true},
  {"username": "pickfour", "password": "password", "email": "xxx@zz.yyy", "screenname": "pickfour", "icon": "images/icons/Subway-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "no_name", "password": "password", "email": "xxx@zz.yyy", "screenname": "no_name", "icon": "images/icons/Superman-48.png", "online": false, "status": "offline", "visible": false},
  {"username": "OMGOMG", "password": "password", "email": "xxx@zz.yyy", "screenname": "OMGOMG", "icon": "images/icons/Thruster-48.png", "online": false, "status": "offline", "visible": true}
];

var friend_lists = [
  {"username": "admin", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "oneone", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "BENKIL", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "billie", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "ono1123", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "carlbb", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "gehah89", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "xxxsdr", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "ghostboy", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "holdover", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "jiminie", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "harry_potter", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "hopalong", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "tupack", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "shitty", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "kennywayne", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "username", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "pickfour", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "no_name", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]},
  {"username": "OMGOMG", "friends": ["oneone", "BENKIL", "ono1123", "gehah89", "tupack", "no_name"]}
]

var icon_list = [
  {'icon': '../../images/icons/AngelList-48.png'},
  {'icon': '../../images/icons/Black Tie-48.png'},
  {'icon': '../../images/icons/Cylon Head New-48.png'},
  {'icon': '../../images/icons/Drupal-48.png'},
  {'icon': '../../images/icons/gramphone-128.png'},
  {'icon': '../../images/icons/Hangar-48.png'},
  {'icon': '../../images/icons/Hellraiser Pinhead-48.png'},
  {'icon': '../../images/icons/Jason Voorhees-48.png'},
  {'icon': '../../images/icons/Logo_256.png'},
  {'icon': '../../images/icons/Opencart-48.png'},
  {'icon': '../../images/icons/OptinMonster-48.png'},
  {'icon': '../../images/icons/pacman.png'},
  {'icon': '../../images/icons/Pied Piper 2-48.png'},
  {'icon': '../../images/icons/Pied Piper-48.png'},
  {'icon': '../../images/icons/retro_mushroom.jpg'},
  {'icon': '../../images/icons/Sauce-48.png'},
  {'icon': '../../images/icons/SlideShare-48.png'},
  {'icon': '../../images/icons/Space Shuttle-48.png'},
  {'icon': '../../images/icons/Spawn-48.png'},
  {'icon': '../../images/icons/Spider-Man Head-48.png'},
  {'icon': '../../images/icons/Spider-Man Old-48.png'},
  {'icon': '../../images/icons/Subway-48.png'},
  {'icon': '../../images/icons/Superman-48.png'},
  {'icon': '../../images/icons/Thruster-48.png'},
  {'icon': '../../images/icons/Viacoin-48.png'}
]

var friend_request = [
  {'to': "admin", 'from': 'billie', 'requestId': '0001'},
  {'to': "admin", 'from': 'carlbb', 'requestId': '0002'},
  {'to': "admin", 'from': 'xxxsdr', 'requestId': '0003'},
  {'to': "admin", 'from': 'ghostboy', 'requestId': '0004'},
  {'to': "admin", 'from': 'harry_potter', 'requestId': '0005'}
]

var messages = [
  {'to': "admin", 'from': 'billie', 'messageId': '0001'},
  {'to': "admin", 'from': 'carlbb', 'messageId': '0002'},
  {'to': "admin", 'from': 'xxxsdr', 'messageId': '0003'},
  {'to': "admin", 'from': 'ghostboy', 'messageId': '0004'},
  {'to': "admin", 'from': 'harry_potter', 'messageId': '0005'}
]

var temp_users = []

var confirmation_username = ""

app.get('/icon_list', function(req, res) {
  res.send(icon_list);
})


app.get('/password', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  var returner = false;
  default_login.forEach(function(o){
    if(o.username === query.username && o.password === query.password) {
      returner = true;
    }
  })
  res.send(returner);
})

app.get('/setting', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var user_to_send = {"username": "", "password": "", "email": "", "screenname": "",
      "icon": "", "online": false, "status": ""};

  user_setting.forEach(function(o){
      if(o.username === query.username) {
        user_to_send.username = o.username;
        user_to_send.password = o.password;
        user_to_send.email = o.email;
        user_to_send.screenname = o.screenname;
        user_to_send.icon = o.icon;
        user_to_send.online = o.online;
        user_to_send.status = o.status;
      };
    });

  res.send(user_to_send);

  //   /user?username=xxx
})

app.get('/friend', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var user_to_send = [];

  friend_lists.forEach(function(o) {
      if(o.username === query.username) {
        for(i = 0; i < o.friends.length; i++) {
          for(j = 0; j < user_setting.length; j++) {
            if(o.friends[i] === user_setting[j].username) {
              var friend_to_push = {"screenname": "", "icon": "", "online": false, "status": ""};
              friend_to_push.screenname = user_setting[j].screenname;
              friend_to_push.icon = user_setting[j].icon;
              friend_to_push.online = user_setting[j].online;
              friend_to_push.status = user_setting[j].status;
              user_to_send.push(friend_to_push);
            }

          }
        }
      };
    });

  res.send(user_to_send);

  //   /user?username=xxx
})

app.get('/username', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  var taken = true;
  default_login.forEach(function(o) {
    if(o.username === query.username) {
      taken = false;
    }
  })
  res.send(taken);
})

app.post('/email', function(req, res) {

  var smtpConfig = {
    service: "Gmail",
    auth: {
        user: "ecsu.software.project@gmail.com",
        pass: "softwareprojectECSU"
      }
  };

  var smtpTransport = nodemailer.createTransport(smtpConfig);

  // /email?useraddress=xxx&username=xxx&usercode=xxx

  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var mailData = {
    from: 'ecsu.software.project@gmail.com',
    to: query.useraddress,
    subject: 'Video Chat Sign Up',
    text: query.usercode,
  };

  smtpTransport.sendMail(mailData, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
  });
  smtpTransport.close();

  var new_temp_user = {"username": query.username, "usercode": query.usercode,
    "email": query.useraddress, "screenname": query.username, "password": query.password};

  if(temp_users == null) {
    temp_users = [new_temp_user];
  } else {
    temp_users[temp_users.length] = new_temp_user;
  }
})




app.post('/new_user', function(req, res) {

  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var new_user_to_push = {"username": query.username,
    "password": query.password};
  var new_user_settings = {"username": query.username,
    "screenname": ""};

  default_login.push(new_user_to_push);
  user_setting.push(new_user_settings);

})

app.get('/confirm_check', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  var returner = false;
  temp_users.forEach(function(o){
    if(o.username === query.username && o.usercode === query.usercode) {
      returner = true;
      newUser(o.username);
    }
  })
  res.send(returner);
})


app.get('/user_status_change', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  res.send(true);
})

app.post('/user_profile_change', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

})

app.get('/friend_video', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var info = {"username": query.username, "port": 21768, "video_object": null};
  res.send(info);
})

app.get('/confirmation', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  confirmation_username = query.username;
  url.resolve(url_parts, '/#/confirmation');
  console.log('got it');
})

app.get('/visible_friends', function(req, res) {
  var visible_friends = [];
  user_setting.forEach(function(o){
    if(o.visible) {
      var friend_to_push = {"username": o.username, "icon": o.icon};
      if(visible_friends == null) {
        visible_friends = [friend_to_push];
      } else {
        visible_friends[visible_friends.length] = friend_to_push;
      }
    }
  })
  console.log(visible_friends);
  res.send(visible_friends);
})

app.post('/make_request', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;

  var requestId = '000' + (friend_request.length + 1);

  var new_request = {'to': query.to, 'from': query.from, 'requestId': requestId};

  friend_request.push(new_request);

  console.log(friend_request);
  res.send(true);
})

app.get('/friend_requests', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  var friend_requsts_to_push = [];

  friend_request.forEach(function(o){
    if(o.to === query.username) {
      var request_to_push = {"to": o.to, "from": o.from, "requestId": o.requestId};
      if(friend_requsts_to_push == null) {
        visible_friends = [request_to_push];
      } else {
        friend_requsts_to_push[friend_requsts_to_push.length] = request_to_push;
      }
    }
  })
  console.log(friend_requsts_to_push);
  res.send(friend_requsts_to_push);
})

app.get('/messages', function(req, res) {
  var url_parts = url.parse(req.url, true)
  var query = url_parts.query;
  var messages_push = [];
  messages.forEach(function(o){
    if(o.to === query.username) {
      var message_to_push = {"to": o.to, "from": o.from, "messageId": o.messageId};
      if(messages_push == null) {
        messages_push = [message_to_push];
      } else {
        messages_push[messages_push.length] = message_to_push;
      }
    }
  })
  console.log(messages_push);
  res.send(messages_push);
})





var newUser = function(username) {
  temp_users.forEach(function(o){
    if(o.username === username) {
      var user_to_send = {"username": "", "password": "", "email": "", "screenname": "",
          "icon": "", "online": true, "status": ""};

            user_to_send.username = o.username;
            user_to_send.password = o.password;
            user_to_send.email = o.email;
            user_to_send.screenname = o.username;
            user_to_send.icon = "";

            user_setting.push(user_to_send);

    }
  })
}
