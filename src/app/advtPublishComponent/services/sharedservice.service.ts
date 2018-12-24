import { Injectable,EventEmitter } from '@angular/core';
import {Form} from './service.model';
import {Block} from './service.model';
import {Location} from './service.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Floor} from './service.model';



@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  selectedUser = new EventEmitter<Form>();
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:3001/api/getUser')
  }

  addUser(user){
    return this.http.post('http://localhost:3001/api/addUser',user)
  }

  updateUser(user:Form,key:number){
    console.log(key);
    return this.http.put('http://localhost:3001/api/updateUser/'+key ,{
      user 
    })

  }

  deleteUser(key:number){
    console.log("key",key);
    return this.http.delete('http://localhost:3001/api/deleteUser/'+key);
  }


////////////////////// block ////////////////////////


public getBlock():Observable<Block[]>{
  return this.http.get('http://localhost:3001/api/getBlock').pipe(map(data => <Block[]>data));
    
}

//////////////////// location ///////////////////////

public getLocation():Observable<Location[]>{
return this.http.get('http://localhost:3001/api/getLocation').pipe(map(data => <Location[]> data));
}

/////////////////// floor /////////////////////////

public getFloor():Observable<Floor[]>{
  return this.http.get('http://localhost:3001/api/getFloor').pipe(map(data=><Floor[]>data));
}
}

