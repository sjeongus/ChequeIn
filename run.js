var express = require('express');
var app = express();
var parser = require('body-parser');

var request = require('request');

app.use(express.static(__dirname));

app.get("/callback", function(req, res) {
  console.log("Handling the response");
  var code = req.query.code;
  console.log("The code is " + code);
  console.log("https://api.venmo.com/v1/oauth/access_token?client_id=2386&code=" + code + "&client_secret=38vPZDCqWU5QcsGGz6VdCNgG6ntZGKug");
  request.post("https://api.venmo.com/v1/oauth/access_token?client_id=2386&code=" + code + "&client_secret=38vPZDCqWU5QcsGGz6VdCNgG6ntZGKug", function(req, res) {
    //var info = JSON.parse(body);
    //console.log(info);
    //console.log(info.user.first_name);
    //res.send(info.user.first_name);
  });
});

app.listen(process.env.PORT || 3000);

