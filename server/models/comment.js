// comment model for mongoose
var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
	name: String
});