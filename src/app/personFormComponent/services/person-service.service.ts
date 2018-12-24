import { Injectable,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import  { PersonModel,Floor, Block, Location} from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
 selectedPerson = new EventEmitter<PersonModel>();
  constructor(private http:HttpClient ) {
  
   }
   

  public getPerson(){
    return this.http.get('http://localhost:3001/api/getPerson');
  }
  
  public getLogin(){
    return this.http.get('http://localhost:3001/api/getLogin');
  }
  
  public getPersons(id:number):Observable<PersonModel> {
    return this.http.get<PersonModel>('http://localhost:3001/api/getPerson');
  }
  
  public addPersonDetails(person) {
    return this.http.post('http://localhost:3001/api/advtPerson',person,{responseType:"text"});
  }
  
   

 public updatePersonDetail(person,key:number){
   return this.http.put('http://localhost:3001/api/updatePerson/'+key,person).subscribe(data =>{
     console.log(data);
     if(status =='200') {
    console.log('sand');
     }
   })

  // public updatePersonDetail(person,key:number):Observable<PersonModel[]>{
  //   return this.http.put('http://localhost:3001/api/updatePerson/'
  //   +key,{
  //     person
  //   }).pipe(
  //     map(data => <PersonModel[]>data));
  // }

}

  
  public deletePersonDetails(key:number){
    return this.http.delete('http://localhost:3001/api/deletePerson/'+key);
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