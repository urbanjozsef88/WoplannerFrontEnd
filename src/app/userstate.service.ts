import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstateService {

  constructor() { }

  currentUserId: number;
  loggedIn = false;

  setUser(userId: number){
    this.currentUserId = userId;
    if(userId === 0){ this.loggedIn = false }
    else{this.loggedIn = true;}
  }


  getUser(){
    return this.currentUserId;
  }




}
