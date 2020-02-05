import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { UserstateService } from '../userstate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  userObj: any;

  ngOnInit() {
    this.userService.getUser().subscribe(
      (data) => { this.userObj = data;}
    )
  }

}
