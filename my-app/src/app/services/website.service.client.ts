import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

websites = [
 {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
 {_id: "234", name: "Tweeter",  developerId: "456", description: "Lorem"},
 {_id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem"},
 {_id: "890", name: "Go", developerId: "123", description: "Lorem" },
 {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
 {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
 {_id: "789", name: "Chess", developerId: "234", description: "Lorem"}
 ];


  createWebsite(userId: any) {
    website._id = Math.random();
    this.websites.push(website);
    return website;
  }

  findWebsiteByUser(userId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserById(websiteId: string) { … }
  // findUserByCredentials(username: string, password: string) { … }

  updateUser(websiteId, website) { … }
  deleteUser(websiteId) { … }
}

// Implement the following API in the WebsiteService service
// 1. createWebsite(userId, website) - adds the website parameter instance to the local websites array.
// The new website's developerId is set to the userId parameter

// 2. findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches
// the parameter userId

// 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the
// websiteId parameter

// 4. updateWebsite(websiteId, website) - updates the website in local websites array whose _id matches
// the websiteId parameter

// 5. deleteWebsite(websiteId) - removes the website from local websites array whose _id matches the
// websiteId parameter
