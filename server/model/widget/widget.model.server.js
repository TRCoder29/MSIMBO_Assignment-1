var mongoose = require('mongoose');
var WidgetSchema = require ('./widget.model.server.js');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

function createWidget(widget){
	return WidgetModel.create(widget);
}

function findWidgetById(wgid){
	return WidgetModel.findById(wgid);
}

function findAllWidgetsForPage(pid){
	return WidgetModel.find({pageId: pid});
}

function updateWidget(wgid, widget){
	return WidgetModel.update({_id: wid, Widget});
}

function deleteWidget(wgid){
	return WidgetModel.remove({_id: wid});
}

module.exports = WidgetModel;