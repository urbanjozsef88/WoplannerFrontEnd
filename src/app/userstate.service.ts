import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstateService {

  constructor() { }

  currentUserId: number;

  setUser(userId: number){
    this.currentUserId = userId;
  }


  getUser(){
    return this.currentUserId;
  }




}
