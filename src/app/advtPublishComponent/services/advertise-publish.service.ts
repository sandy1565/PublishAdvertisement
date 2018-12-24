import { Injectable, EventEmitter } from '@angular/core';
// import { advertisePublish } from './advertisePublish-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisePublishService {

  // selectedUser = new EventEmitter<advertisePublish>();
    constructor( private http:HttpClient ) { }

    getPublish() {
      return this.http.get('http://localhost:3001/api/getPublish');
    }
    id:any;
    addPublish(advertisepublish ) {
        return this.http.post('http://localhost:3001/api/advtPublish', advertisepublish, {responseType: 'text'});
    }
      
 }
