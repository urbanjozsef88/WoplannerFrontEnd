import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/service/user.service';
import {Router} from '@angular/router';
import { UserstateService } from '../userstate.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartscreenComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private userState: UserstateService) { }

  ngOnInit() {
  }

  userDTO={
    email:'',
    password:''
  };

  CurrentUser: any;



  login(){
    this.userService.loginUser(this.userDTO).subscribe((data) =>{
      this.CurrentUser = data;
      console.log(this.userDTO);
    console.log(this.CurrentUser);
    this.userState.setUser(this.CurrentUser.id);
    this.router.navigateByUrl(`workouts/currentuser/${this.CurrentUser.id}`)
    this.userDTO.email='';
    this.userDTO.password='';
    });
    
  }

}
