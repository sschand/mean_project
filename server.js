//console.log("Hello from node");

//Server page - include express
//create an express app - include modules here like express nd body-parser
var express = require('express'),
	app 	= express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	commentsController = require('./server/controllers/comments-controller');

//connect with MongoDb with mongoose
mongoose.connect('mongodb://localhost:27017/mean-demo');

// user-middlewhere - When someone calls bodyParser just use the premade one, inject this way
app.use(bodyParser());

//define ROUTES - in '/' root directory, res is the response by sending this file
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

/* REST API */
//create new comment
app.post('/api/comments', commentsController.create);

//list comments from the db
app.get('/api/comments', commentsController.list);



//defining when someone calls the js folder they mean access the the client/js folder
app.use('/js', express.static(__dirname + '/client/js'));

//listen on this port number 
app.listen(3000, function(){
	console.log("I'm listening...");
});

