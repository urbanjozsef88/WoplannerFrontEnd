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

  userIn = false;

  ngOnInit() {
    if(this.userStatus.getUser() >= 1){
      this.userIn = true;
    }
  }

  logOut(){
    this.userStatus.setUser(0);
  }

}
