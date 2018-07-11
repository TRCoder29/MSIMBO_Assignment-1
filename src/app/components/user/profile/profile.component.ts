import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { SharedService } from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	@ViewChild('f') profileForm: NgForm;

	uid: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	oldUsername: string;
	usernameTaken: boolean;
	submitSuccess: boolean;
	user: User = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: ''
	};
	aUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  	this.usernameTaken = false;
  	this.submitSuccess = false;
  	this.user = this.sharedService.user;
  	this.uid = this.user._id;
	this.username = this.user.username;
	this.email = this.user.email;
	this.firstName = this.user.firstName;
	this.lastName = this.user.lastName;
	this.oldUsername = this.user.username;
	}

	update(){
		this.username = this.profileForm.value.username;
		this.email = this.profileForm.value.email;
		this.firstName = this.profileForm.value.firstName;
		this.lastName = this.profileForm.value.lastName;
		this.userService.findUserByUsername(this.username).subscribe(
			(user: User) => {
				this.aUser = user;
			}
		);
		if(this.aUser && this.oldUsername != this.username){
			this.usernameTaken = true;
			this.submitSuccess = false;
		} else {
			const updatedUser: User = {
				_id: this.user._id,
				username: this.username,
				password: this.user.password,
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email
			};
			this.userService.updateUser(this.user._id, updatedUser);
			this.usernameTaken = false;
			this.submitSuccess = true;
		}
	}

	logout() {
		this.userService.logout().subscribe(
	     (data: any) => this.router.navigate(['/login'])
	   );

	}
}

  // 	this.activatedRoute.params.subscribe(params =>{
  // 		this.uid = params['uid'];
  // 		this.userService.findUserById(this.uid).subscribe(
  // 			(user: User) => {
  // 				this.user = user;
		// 		this.username = this.user.username;
		// 		this.email = this.user.email;
		// 		this.firstName = this.user.firstName;
		// 		this.lastName = this.user.lastName;
		// 		this.oldUsername = this.user.username;
  // 			}
  // 		);
  // })