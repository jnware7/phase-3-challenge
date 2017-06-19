var express = require('express');
var app = express();

var port = 3000;

app.get('/zero', function(req,res){
  res.send('0');
});

app.get('/add/:a/:b/', function(req,res){
  var a = req.params.a
  var b = req.params.b

  function add(num1,num2){
    var A = Number(a)
    var B = Number(b)
    return A + B
  }
res.send(add(a,b).toString())

});
app.get('/subtract/:a/:b/', function(req,res){
  var a = req.params.a
  var b = req.params.b

  function sub(num1,num2){
    var A = Number(a)
    var B = Number(b)
    return A - B
  }
res.send(sub(a,b).toString())
});

app.get('/double/:number', function(req,res){
  var number = req.params.number

  function dub(number){
  var num = Number(number)
     return num * 2
  };
  res.send(dub(number).toString());
});

app.listen(3000,function(err){
  console.log('running server on port: '+ port);
});
