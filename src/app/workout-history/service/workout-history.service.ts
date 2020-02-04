import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutHistoryService {

  constructor(private httpClient: HttpClient) { }

  userid: number = 1


  getAll(userid: number){
    return this.httpClient.get(`http://localhost:8080/api/workouthistory/currentuser/${userid}`);
  }

  post(userid: number, workoutid:number){
    return this.httpClient.post(`http://localhost:8080/api/workouthistory/currentuser/${userid}/workout/${workoutid}`, null)
  }



}
