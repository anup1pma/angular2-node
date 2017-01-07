var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
	content: {type: String, required: true},
	user: {type:Schema.types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);