import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { EmailValidator } from '@angular/forms';
import { User } from '../models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  constructor(private userService: UserService, private router: Router) { }

  newUser={
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  passwordagain: string = '';

  passwordCheck(){
    if(this.passwordagain === this.newUser.password){
      return true;
    } else { return false;}
  }



  ngOnInit() {
  }


  createNew(){
    if(this.passwordCheck()){
    let newuser = new User(this.newUser.email, this.newUser.email, this.newUser.firstName, this.newUser.lastName, this.newUser.password);
    this.userService.postUser(newuser).subscribe(() =>{
      alert('Registration was successful!');
      this.router.navigateByUrl("");
    },
    err => alert('There was an error, please try it again!'))}
    else{alert('Passwords are not matching')}
    

  }


}
