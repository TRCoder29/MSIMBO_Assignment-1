// ViewChild allows you to find all of the "children" of the form.
// The form referenced in this html and ts is f.
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import {UserService} from '../../../services/user.service.client'
import {User} from '../../../models/user.model.client'
import {Router} from '@angular/router'

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

    var user: User = this.userService.findUserByCredentials(this.username, this.password);
    if (user){
    	//navigate to profile
    	this.errorFlag = false;
    	this.router.navigate(['user', user._id]);

    } else {
    	this.errorFlag = true;
    }
  }
}
