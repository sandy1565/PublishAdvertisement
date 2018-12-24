import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http) { }

  getLogin(user){
    return this.http.post('http://localhost:3001/api/login',user)
  }
}
