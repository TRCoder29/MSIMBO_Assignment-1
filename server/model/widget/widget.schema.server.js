var mongoose = require('mongoose');

var WidgetSchema = mongoose.Schema({
	pageId: {type: mongoose.Schema.Types.ObjectId, ref: "WidgetModel"},
	widgetType: type: String, enum: {['HEADING', 'IMAGE', 'YOUTUBE']}
	name: String,
	text: String,
	url: String,
	width: String,
	size: Number,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'widget'})

module.exports = WidgetSchema;