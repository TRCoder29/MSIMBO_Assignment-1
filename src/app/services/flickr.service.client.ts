import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

// injecting service into module
@Injectable()

export class FlickrService {

	key = "1d3a9ba4256e671d8e5773d5fabe2835";
	secret = "44196d5f24838ac3";
	urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

  constructor(private http: Http) { }

  searchPhotos(searchTerm: any) {
  	const url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);
  	return this.http.get(url);
  }
}