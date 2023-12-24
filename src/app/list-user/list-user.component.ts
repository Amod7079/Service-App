import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
 // providers:[ UserService]
})
export class ListUserComponent implements OnInit {

 

  users: User[] | undefined;

  constructor(private userservice:UserService) {
   // this.userservice = new UserService(); // here i make object hardcoded 
   
  }

  getUsers() {
     this.users = this.userservice.getUsers();
  }

  status: boolean = false;

  hideUser() {
    this.status = !this.status; // Toggle the value
  }

  ngOnInit(): void {
  }
}
