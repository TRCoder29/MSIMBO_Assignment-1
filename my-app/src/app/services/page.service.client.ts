import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages = [
  {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
  {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
  {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
];

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: string) { … }
  findUserByCredentials(username: string, password: string) { … }
  updateUser(userId, user) { … }
  deleteUser(userId) { … }
}

// Implement the following API in the PageService service
// 1.	createPage(websiteId, page) - adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
// 2.	findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId matches the parameter websiteId
// 3.	findPageById(pageId) - retrieves the page in local pages array whose _id matches the pageId parameter
// 4.	updatePage(pageId, page) - updates the page in local pages array whose _id matches the pageId parameter
// 5.	deletePage(pageId) - removes the page from local pages array whose _id matches the pageId parameter
