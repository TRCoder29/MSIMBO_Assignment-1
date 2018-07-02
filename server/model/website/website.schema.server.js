var mongoose = require('mongoose');

var WebsiteSchema = mongoose.Schema({
	name: String,
	developerId: String,
	description: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'website'})

module.exports = WebsiteSchema;