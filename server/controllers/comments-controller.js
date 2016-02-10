 
 var Comment = require('../models/comment');

 module.exports.create = function(req, res){
 	//console.log(req.body);
 	var comment = new Comment(req.body);
 	comment.save( function (err, result){
		res.json(result);
 	});
 };

 module.exports.list = function (req, res) {
 	Comment.find({}, function (err, results){
 		res.json(results);
 	});
 };