import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserstateService } from '../userstate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private userStatus: UserstateService) { }

  

  ngOnInit() {

  }

  logOut(){
    this.userStatus.setUser(0);
  }


  workoutNavigate(){
    if(this.userStatus.loggedIn){
      this.router.navigateByUrl('workouts')
    } else{
      alert('Please LogIn!')
    }
  }

  workoutHistoryNavigate(){
    if(this.userStatus.loggedIn){
      this.router.navigateByUrl('workouthistory')
    } else{
      alert('Please LogIn!')
    }
  }

  userNavigate(){
    if(this.userStatus.loggedIn){
      this.router.navigateByUrl('user')
    } else{
      alert('Please LogIn!')
    }
  }


}
