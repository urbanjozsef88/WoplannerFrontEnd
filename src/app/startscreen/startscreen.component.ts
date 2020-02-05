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

  handleError(error: any){
    if(error.status === 401){alert('Wrong password')};
    if(error.status === 404){alert('Wrong email address')}
  }

  login(){
    this.userService.loginUser(this.userDTO).subscribe((data) =>{
      this.CurrentUser = data;
    this.userState.setUser(this.CurrentUser.id);
    this.router.navigateByUrl(`workouts`)
    this.userDTO.email='';
    this.userDTO.password='';
    },
    (error) => this.handleError(error));
    
  }

}
