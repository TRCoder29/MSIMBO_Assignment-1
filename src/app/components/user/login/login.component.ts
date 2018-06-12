import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

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

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit() {
  }

  login(){
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    
    this.userService.findUserByCredentials(this.username, this.password).subscribe(
      (user: User) => {
	      this.errorFlag = false;
	      this.router.navigate(['user', user._id]);
      },
      (error: any) => {
    	  this.errorFlag = true;
      }
    )
  }
}
