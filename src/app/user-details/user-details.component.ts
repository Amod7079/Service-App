import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
 // providers:[ UserService]
})
export class UserDetailsComponent implements OnInit {
 // userservice: UserService ;
  user: User[] | undefined;
  constructor(private userservice:UserService) {
   // this.userservice = new UserService();
  }

  getUsers() {
    this.user = this.userservice.getUsers();
 }


  ngOnInit(): void {
  }
  status: boolean = false;

  hideUser() {
    this.status = !this.status; // Toggle the value
  }

}
