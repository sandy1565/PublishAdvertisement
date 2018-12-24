import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { PersonServiceService } from '../services/person-service.service';
import  { PersonModel,Floor, Block, Location} from '../services/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent implements OnInit {

  

  constructor(private service: PersonServiceService) { }



  blocks = [];
  locations = [];
  floors = []; 
  firstname;
  middlename;
  lastname;
  blockId;
  floorId;
  locationId;
  address;
  pincode;
  date_of_birth;
  gender;
  mobile_number1;
  mobile_number2;

  selectedBlockName;  
selectedLocationName;
selectedFloorType;




  ngOnInit() {



    this.service.getFloor().subscribe(data => {
      this.floors = data;
    })

    this.service.getBlock().subscribe(data => {
      this.blocks = data;
    })

    this.service.getLocation().subscribe(data => {
      this.locations = data;
    })


  }

  selectBlockName(){
    this.selectedBlockName=this.blockId;
    console.log(this.selectedBlockName);
  }

  selectLocationName(){
    this.selectedLocationName=this.locationId;
    console.log(this.selectedLocationName)
  }

  selectFloorName(){
    this.selectedFloorType=this.floorId;
    console.log(this.selectedFloorType);
  }


  onSubmit(event,firstname, middlename, lastname, Address, Pincode, dateofbirth, Gender, mobilenumber1, mobilenumber2) {
    var personDetails={};
    personDetails['firstname']=firstname;
    personDetails['middlename']=middlename;
    personDetails['lastname']=lastname;
    personDetails['block_id']=this.selectedBlockName;
    personDetails['address']=Address;
    personDetails['floor_id']=this.selectedFloorType;
    personDetails['location_id']=this.selectedLocationName;
    personDetails['date_of_birth']=dateofbirth;
    personDetails['pincode']=Pincode;
    personDetails['mobile_number1']=mobilenumber1;
    personDetails['mobile_number2']=mobilenumber2;
    personDetails['gender']=Gender;
    
    this.service.addPersonDetails(personDetails).subscribe((data)=>{
      console.log(data);
      alert("Person added");
      console.log("added successfully");
      
    }); 
    
  }
 

  //////validation/////////////

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
