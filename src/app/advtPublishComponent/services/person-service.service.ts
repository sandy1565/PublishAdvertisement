import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import  { PersonModel,Floor, Block, Location} from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) {
  
   }

  public getPerson(){
    return this.http.get('http://localhost:3001/api/getPerson');
  } 
  public getFloor():Observable<Floor[]>{
    return this.http.get('http://localhost:3001/api/getFloor').pipe(map(data => <Floor[]>data));
  }
  
  public getBlock():Observable<Block[]> {
    return this.http.get('http://localhost:3001/api/getBlock').pipe(map(data => <Block[]>data));
  }

  public getLocation():Observable<Location[]>{
    return this.http.get('http://localhost:3001/api/getLocation').pipe(map(data =><Location[]> data ));
  }


  }
