import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserstateService } from 'src/app/userstate.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutHistoryService {

  constructor(private httpClient: HttpClient, private userState: UserstateService) { }

  //userid: number = 1


  getAll(){
    return this.httpClient.get(`http://localhost:8080/api/workouthistory/currentuser/${this.userState.getUser()}`);
  }

  post( workoutid:number){
    return this.httpClient.post(`http://localhost:8080/api/workouthistory/currentuser/${this.userState.getUser()}/workout/${workoutid}`, null)
  }

  delete(){
    return this.httpClient.delete(`http://localhost:8080/api/workouthistory/currentuser/${this.userState.getUser()}`);
  }



}
