import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Workout } from 'src/app/models/workout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  //list= [new Workout(1, 'First'), new Workout(2,'Second')]
  id = 1;

  constructor(private httpClient: HttpClient) { }

get(id: number){
  return this.httpClient.get(`http://localhost:8080/api/workout/${this.id}`);
}

getAll(id: number){
  return this.httpClient.get(`http://localhost:8080/api/workout/currentuser/${this.id}`);
}

addWorkout(workout: Workout){
  //const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  return this.httpClient.post(`http://localhost:8080/api/workout/currentuser/${this.id}`, workout, {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
})
}

deleteWorkout(id: number){
 return this.httpClient.delete(`http://localhost:8080/api/workout/${id}`);
}



}
