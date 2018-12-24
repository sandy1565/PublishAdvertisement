import { Component, OnInit, TemplateRef } from '@angular/core';

import { PersonModel } from '../services/person.model';
import { PersonServiceService } from '../services/person-service.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})


export class PersonListComponent implements OnInit {
  persons: any;
  dataRefresher: any;
  filteredRegistration: PersonModel[];
  private _searchTerm: string;
  p: number = 1;
  blocks = [];
  locations = [];
  floors = [];
  selectedBlockName;
  blockId;
  selectedLocationName;
  locationId;
  selectedFloorType;
  floorId;


  get searchTerm(): string {
    return this._searchTerm;
  }


  set searchTerm(value: string) {
    this._searchTerm = value;
  }

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  constructor(private service: PersonServiceService, private router: Router, private modalService: BsModalService, private datePipe: DatePipe) {

  }


  unit: any = {};


  ngOnInit() {

    // this.date = this.datePipe.transform(new Date(), )
    this.refetchUsers();
    this.filteredRegistration = this.persons;
    //   this.dataRefresher = setInterval(()=>{
    //     this.service.getPerson()
    // .subscribe( data=> {
    //   this.users = data;
    // });
    //   },1500)


    this.service.getPerson().subscribe(data => {
      this.persons = data;
    })


    this.service.getFloor().subscribe(data => {
      this.floors = data;
    })

    this.service.getBlock().subscribe(data => {
      this.blocks = data;

    })

    this.service.getLocation().subscribe(data => {
      this.locations = data;
    })

    //  this.service.updatePersonDetails(form.value,form.id).subscribe(
    //    data =this.data;
    //  )


  }


  selectBlockName() {
    // block= this.blocks[block].blockName;
    this.selectedBlockName = this.cardToEdit.blockId
    console.log(this.selectedBlockName);
  }

  selectLocationName() {
    this.selectedLocationName = this.cardToEdit.locationId;
    console.log(this.selectedLocationName);
  }
  selectedFloorName;
  selectFloorName() {
    this.selectedFloorName = this.cardToEdit.floorId;
    console.log(this.selectedFloorName);
  }


  ngOnDestroy() {
    clearInterval(this.dataRefresher);
  }


  refetchUsers() {
    this.service.getPerson()
      .subscribe((data) => {
        // this.users=(JSON.parse(data["_body"]));
        this.persons = data;
        // console.log(this.users);
      });

  }

  cardToEdit: any = {};
  myValue;
  clickOnEditCardBtn(person, i) {
    console.log("pop up open", person);
    console.log(i);
    this.cardToEdit.person_id = person.person_id;
    this.cardToEdit.firstname = person.firstname;
    this.cardToEdit.middlename = person.middlename;
    this.cardToEdit.lastname = person.lastname;
    this.cardToEdit.blockId = person.block_id.value;

    this.cardToEdit.address = person.address;
    this.cardToEdit.floorId = person.floor_id.value;
    this.cardToEdit.locationId = person.location_id.value;
    this.cardToEdit.pincode = person.pincode;
    this.cardToEdit.date_of_birth = person.date_of_birth;
    console.log(this.cardToEdit.date_of_birth = person.date_of_birth);
    this.cardToEdit.mobile_number1 = person.mobile_number1;
    this.cardToEdit.mobile_number2 = person.mobile_number2;
    this.cardToEdit.gender = person.gender;
    this.myValue = person;
    console.log("==================", (person.date_of_birth));

  }

  updateCard(i) {

    // console.log(this.myValue);
    this.service.updatePersonDetail(this.cardToEdit, i);
    // .subscribe((data)=>{
    //    console.log(this.cardToEdit.firstname);
    // console.log(data);
    //     alert("Person Updated");
    //     console.log("updated successfully");
    // }); 
    // }
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

}
