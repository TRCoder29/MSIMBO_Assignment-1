import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

users = [
{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
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

// 1.  createUser(user) - adds the user parameter instance to the local users array
// 2.  findUserById(userId) - returns the user in local users array whose _id matches the userId parameter
// 3.  findUserByUsername(username) - returns the user in local users array whose username matches the parameter username
// 4.  findUserByCredentials(username, password) - returns the user whose username and password match the username and password parameters
// 5.  updateUser(userId, user) - updates the user in local users array whose _id matches the userId parameter
// 6.  deleteUser(userId) - removes the user whose _id matches the userId parameter

