import { Component, OnInit } from '@angular/core';
import {AdvtModel} from '../services/advtDetails.model';
import {AdvtDetailsService} from '../services/advt-details.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-advt-details-list',
  templateUrl: './advt-details-list.component.html',
  styleUrls: ['./advt-details-list.component.css']
})
export class AdvtDetailsListComponent implements OnInit {

  users:any;
  dataRefresher:any;
  filteredRegistration: AdvtModel[];
  private _searchTerm: string;
  p:number=1;
  

  clientName=[];
  clientId;
  advt_details;
  publish_date;
  age_from;
  age_to;
  
  selectedClientName;
  
  
   
  get searchTerm(): string{
    return this._searchTerm;
  }
  
  
  set searchTerm(value: string){
    this._searchTerm =value;
     }

     modalRef: BsModalRef | null;
     modalRef2: BsModalRef;

  constructor(private advtService:AdvtDetailsService,  private modalService: BsModalService) { }

  ngOnInit() {
    this.filteredRegistration= this.users;
    this.dataRefresher = setInterval(()=>{
      this.advtService.getAdvtDetails()
  .subscribe( data=> {
    this.users = data;

  });
    },1500)

    this.clientName=[];
    
    this.advtService.getClient().subscribe(data => {
      this.clientName = data;
    })

  }

  selectClientName(){
    this.selectedClientName= this.clientId;
    console.log(this.selectedClientName);
    
  }




  
cardToEdit: any = {};
myValue;
  clickOnEditCardBtn(a, i, event) {
    console.log("pop up open",a);
    console.log(i);
    this.cardToEdit.client_id = a.client_id;
    this.cardToEdit.advt_details = a.advt_details;
    this.cardToEdit.publish_date = a.publish_date;
    this.cardToEdit.ageFrom = a.age_from;
    this.cardToEdit.age_to = a.age_to;
    this.myValue = a;
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
  
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
       event.preventDefault();
    }
  }
  
  
  keyPressed(event: any) {
    const pattern = /^[a-zA-Z]+$/;
  
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
       event.preventDefault();
    }
  }
  
  
  
  
  getValue;
  fromDate(age_from) {
    this.getValue = this.age_from;
    console.log(this.getValue);
  }
  
  
  ageToFrom;
  checkPrice() {
  this.ageToFrom = this.age_to;
  console.log(this.ageToFrom);
  
  if(this.getValue > this.ageToFrom) {
    alert("Please Enter the correct value.");
  }
  }
 


}
