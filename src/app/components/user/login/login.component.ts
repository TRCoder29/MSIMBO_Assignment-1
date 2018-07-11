import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 // We want to view all the "children" of the f element.
 // NgForm is the type of element, the same way string would be a type.
  @ViewChild('f') loginForm: NgForm;

// variables for the functions in component HTML and TS:
  username: string;
  password: string;
  errorFlag: boolean;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }
  
  ngOnInit() {
  }

  login() {
  // fetching data from loginForm
  this.username = this.loginForm.value.username;
  this.password = this.loginForm.value.password;
  // calling client side userservice to send login information
  this.userService.login(this.username, this.password).subscribe(
    (user: User) => {
      if(!user){
        this.errorFlag = true;
      } else {
        this.errorFlag = false;
        this.sharedService.user = user;
        this.router.navigate(['user'])
      }
    },
    (error: any) => {
      this.errorFlag = true;
     }
   );
  }
}

  // login(){
  //   this.username = this.loginForm.value.username;
  //   this.password = this.loginForm.value.password;
    
  //   this.userService.findUserByCredentials(this.username, this.password).subscribe(
  //     (user: User) => {
  //       if(user){
  //         this.errorFlag = false;
  //         this.router.navigate(['user', user._id]);
  //       } else {
  //         this.errorFlag = true;
  //       }
  //     },
  //     (error: any) => {
  //       this.errorFlag = true;
  //     }
  //   )
  // }