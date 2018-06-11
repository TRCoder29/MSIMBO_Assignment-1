import { Injectable } from '@angular/core';
import {Website} from '../models/website.model.client';
import { map } from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

// websites: Website[] = [
//  {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
//  {_id: "234", name: "Tweeter",  developerId: "456", description: "Lorem"},
//  {_id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem"},
//  {_id: "890", name: "Go", developerId: "123", description: "Lorem" },
//  {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
//  {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
//  {_id: "789", name: "Chess", developerId: "234", description: "Lorem"},
//  ]


  createWebsite(userId: string, website: Website) {
      const url = this.baseUrl + '/api/user/' + userId + '/website';
      return this.http.post(url, website).pipe(map(
      (response: Response) => {
          return response.json();
      }
    ));
  }


  findWebsitesByUser(userId: string) {
  	const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  findWebsiteById(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  updateWebsite(websiteId: string, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }


  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}