import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
//import { UserShow } from "../Services2/user.service";
//import { LoginService } from "../Services2/login.service";
@Injectable()
export class UserService {
    private users: User[]; // Correct the declaration and make it private

    constructor() {
        //console.log("Creating sucessfull..")
        this.users = [
            new User("Amod Saha", "kumaramod2812@gmail.com", "SoftwareEngg"),
            new User("Maaz Shaikh", "Maaz@aol.com", "Fresher"),
            new User("Sandip Kumar", "SandipBtl@co.uk", "Fresher"),
            new User("Pyiyank Panchal", "Priyank co.Btl@uk", "Fresher"),
            
            new User("Pramod Kumar", "PramodBtlCo.Uk", "Fresher"),
        ];
    }

    // Correct the syntax for the method
    getUsers(): User[] {
        return this.users;
    }
}
