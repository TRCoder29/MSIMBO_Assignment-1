import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }

widgets = [
  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/"},
  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
];


// 1. createWidget(pageId, widget) - adds the widget parameter instance to the local widgets array.
// The new widget's pageId is set to the pageId parameter
  
  createWidget(pageId, widget) {
  	widget._id = Math.floor(Math.random() * Math.floor(10000));
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }


// 2. findWidgetsByPageId(pageId) - retrieves the widgets in local widgets array whose pageId
// matches the parameter pageId

  findWidgetsByPageId(pageId) {
    let result = [];
      for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i].pageId === pageId) {
      	result.push(this.widgets[i]);
    }
  }
   return result;
}


// 3. findWidgetById(widgetId) - retrieves the widget in local widgets array whose _id
// matches the widgetId parameter

  findWidgetById(widgetId) {
      for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
      	return this.widgets[i];
    }
  }
}


// 4. updateWidget(widgetId, widget) - updates the widget in local widgets array whose _id
// matches the widgetId parameter

  updateWidget(widgetId, widget) {
    var oldWidget = this.findWidgetById(widgetId);
    var index = this.widgets.indexOf(oldWidget);

    this.widgets[index].type = widget.type;
    this.widgets[index].text = widget.text;
  }


// 5. deleteWidget(widgetId) - removes the widget from local widgets array whose _id
// matches the widgetId parameter

  deleteWidget(widgetId) {
    var widget = this.findWidgetById(widgetId);
    var index = this.widgets.indexOf(widget);
    this.widgets.splice(index, 1);
  }
}

// Implement the following API in the WidgetService service

// 1.	createWidget(pageId, widget) - adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
// 2.	findWidgetsByPageId(pageId) - retrieves the widgets in local widgets array whose pageId matches the parameter pageId
// 3.	findWidgetById(widgetId) - retrieves the widget in local widgets array whose _id matches the widgetId parameter
// 4.	updateWidget(widgetId, widget) - updates the widget in local widgets array whose _id matches the widgetId parameter
// 5.	deleteWidget(widgetId) - removes the widget from local widgets array whose _id matches the widgetId parameter
