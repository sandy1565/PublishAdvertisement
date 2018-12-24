import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import  { AdvtModel,ClientModel} from './advtDetails.model';


@Injectable({
  providedIn: 'root'
})
export class AdvtDetailsService {

  constructor(private http:HttpClient) { }

 public getAdvtDetails(){
    return this.http.get('http://localhost:3001/api/getAdvt');
  }

 
 public addAdvtDetails(details){
    return this.http.post('http://localhost:3001/api/addAdvt',details)
   } 
   
 public updateAdvtDetails(details:AdvtModel,key:number){
    return this.http.put('http://localhost:3001/api/updateAdvt/'+key,{
      details
    })
  }
  
 public deleteAdvt(key:number){
    return this.http.delete('http://localhost:3001/api/deleteAdvt/'+key);
  }

 public getClient():Observable<ClientModel[]>{
    return this.http.get('http://localhost:3001/api/getClient').pipe(map(data => <ClientModel[]>data));
  }
  
  
  
}
