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
  
  wgid: string;
  widget: Widget;
	name: string;
	text: string;
	size: number;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.wgid = params['wgid'];
  		this.widget = this.widgetService.findWidgetById(this.wgid);
  	})
  }

}
