import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WidgetService } from '../../../services/widget.service.client'
import { Widget } from '../../../models/widget.model.client'

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  
    widget: Widget = {
    _id: '',
    widgetType: '',
    pageId: '',
  }
	wgid: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.wgid = params['wgid'];
  		this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: Widget) => {
           this.widget = widget;
        }
      );
  	})
  }
}
