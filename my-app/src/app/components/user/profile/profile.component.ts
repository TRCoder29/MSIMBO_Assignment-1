import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../../../services/user.service.client'
import {User} from '../../../models/user.model.client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	@ViewChild('f') profileForm: NgForm;
	uid: string;
	user: User;
	username: string;
	email: string;
	firstName: string;
	lastName: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  	var profile = this;
  	this.activatedRoute.params.subscribe(
	function info(params){
		profile.uid = params['uid']
		profile.user = profile.userService.findUserById(profile.uid);
		profile.username = profile.user.username;
		profile.email = profile.user.email;
		profile.firstName = profile.user.firstName;
		profile.lastName = profile.user.lastName;
  });
}

	update(){
		this.username = this.profileForm.value.username;
		this.email = this.profileForm.value.email;
		this.firstName = this.profileForm.value.firstName;
		this.lastName = this.profileForm.value.lastName;
	}

