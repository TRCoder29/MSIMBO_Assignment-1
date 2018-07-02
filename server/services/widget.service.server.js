module.exports = function(app) {

	var multer = require('multer');
    var upload = multer({ dest: './dist/assets/uploads' });

    var widgetModel = require('../model/widget/widget.model.server.js')

	// var widgets = [
	//   { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
	//   { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
	//   { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/"},
	//   { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
	//   { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
	//   { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
	//   { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
	// ];

	app.post('/api/page/:pid/widget', createWidget);
	app.post('/api/user/:uid/website/:wid/page/:pid/widget/:wgid/upload', upload.single('myFile'), uploadImage);
	app.get('/api/page/:pid/widget', findAllWidgetsForPage);
	app.get('/api/widget/:wgid', findWidgetById);
	app.put('/api/widget/:wgid', updateWidget);
	app.delete('/api/widget/:wgid', deleteWidget);


	function createWidget(req, res) {
		const pid = req.params['pid'];
		const widget = req.body;
		widgetModel.createWidget(widget).then(
			widget => {
				res.json(widget);
			}
		);
	}


	function findAllWidgetsForPage(req, res) {
		const pid = req.params['pid'];
		widgetModel.findAllWidgetsForPage(pid).then(
			(widgets) => {
				res.json(widgets);
			}
		);
	}


	function findWidgetById(req, res) {
		const wgid = req.params['wgid']
		widgetModel.findWidgetById(wgid).then(
			widget => {
				res.json(widget);
			}
		);
	}


	function updateWidget(req, res) {
		const wgid = req.params['wgid'];
		const widget = req.body;
		widget.updateWidget(wgid, widget).then(
			data => {
				res.json(data);
			}
		);
  }


	function deleteWidget(req, res) {
		const wgid = req.params['wgid'];
		widgetModel.deleteWidget(wgid).then(
			data => {
				res.json(data);
			}
		);
  	}


	function uploadImage(req, res) {
        const wid = req.params['wid'];
        const pid = req.params['pid'];
        const wgid = req.params['wgid'];

        var myFile = req.file;

        widget = widgetModel.findWidgetById(wgid).then(
        	(widget) => {
        		widget.url = '/assets/uploads/' +myFile.filename;
        		widgetModel.updateWidget(wgid, widget).then(
        			(data) => {
        				var callbackUrl = req.headers.origin + "/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
        				res.redirect(callbackUrl);
        			}
        		);
        	}
        );
    }
}
