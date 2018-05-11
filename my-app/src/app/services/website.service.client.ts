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
 {_id: "789", name: "Chess", developerId: "234", description: "Lorem"},
 ];

// 1. createWebsite(userId, website) - adds the website parameter instance to the local websites array.
// The new website's developerId is set to the userId parameter
  createWebsite(website, userId: string) {
  	// set up _id field
    website._id = Math.random();
    // set up developerId
    website.developerId = userId;
    //push website into websites
    this.websites.push(website);
    return website;
  }


// 2. findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches
// the parameter userId
  findWebsitesByUser(userId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === userId) {
        return this.websites[x];
    }
  }
}

// 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the
// websiteId parameter
  findUserByUsername(username: string) {
        for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
    }
  }
}


  findUserByCredentials(username: string, password: string) {
   for(let x = 0; x<this.users.length; x++){
     if (this.users[x].username===username && this.users[x].password===password){
       return this.users[x];
     }
   }
 }

// 4. updateWebsite(websiteId, website) - updates the website in local websites array whose _id matches
// the websiteId parameter
  updateUser(userId, user) {
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;
  }

// 5. deleteWebsite(websiteId) - removes the website from local websites array whose _id matches the
// websiteId parameter
  deleteUser(userId) {
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users.splice(index, 1);
  }
}

