import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUser(id: number){
    return this.httpClient.get(`http://localhost:8080/api/user/${id}`);
  }

  loginUser(userDTO: any){
    return this.httpClient.post(`http://localhost:8080/api/user/login`, userDTO, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
  }


  postUser(user: User){
    //const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.httpClient.post(`http://localhost:8080/api/user`, user, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
  }


}
