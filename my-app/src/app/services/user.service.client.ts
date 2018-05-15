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

// 1.  createUser(user) - adds the user parameter instance to the local users array
  createUser(user) {
    user._id = Math.floor(Math.random() * 10000).toString();
    this.users.push(user);
    return user;
  }

// 2.  findUserById(userId) - returns the user in local users array whose _id matches the userId parameter
  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
    }
  }
}

// 3.  findUserByUsername(username) - returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: string) {
        for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
    }
  }
}

// 4.  findUserByCredentials(username, password) - returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: string, password: string) {
   for(let x = 0; x<this.users.length; x++){
     if (this.users[x].username===username && this.users[x].password===password){
       return this.users[x];
     }
   }
 }

// 5.  updateUser(userId, user) - updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) {
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;
  }

// 6.  deleteUser(userId) - removes the user whose _id matches the userId parameter
  deleteUser(userId) {
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users.splice(index, 1);
  }
}








