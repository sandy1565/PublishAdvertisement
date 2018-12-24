import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdvertisePublishService } from '../services/advertise-publish.service';
import {PersonServiceService} from '../services/person-service.service';


@Component({
  selector: 'app-advertise-publish',
  templateUrl: './advertise-publish.component.html',
  styleUrls: ['./advertise-publish.component.css']
})

export class AdvertisePublishComponent implements OnInit  {
 

  

  constructor(private advertisepublishService: AdvertisePublishService, private personService:PersonServiceService) {  }
  userSelectsString = '';
  gender = null; 
  gender1 =null; 
  locations = [];
  blocks = [];
  inputAddGroup;
  age_as_per_advtPublishDate;
  selectedBlockId;
  blockId;
  selectionLocationId;
  locationId;
  show: boolean = false;
  genderTypeValue;
  genderType;
  userSelects = [];

  ngOnInit() {
    this.blocks = [];
    this.locations = [];
    
    // this.advertisepublishService.selectedUser.subscribe((data) => {
    //   this.publishAdvertisement = data;
    // });

    this.personService.getBlock().subscribe(data => {
      this.blocks = data;
    });

    this.personService.getLocation().subscribe(data => {
      this.locations = data;
    });
  }
  
  selectLocationName() { 
      this.selectionLocationId = this.locationId;
      console.log(this.selectionLocationId);
  } 
 
  selectBlockName() {
    this.selectedBlockId = this.blockId;
    console.log(this.selectedBlockId);
  }

  suggest() {
    this.show = true;
  }

  isSelected(s:any) {
   return this.userSelects.findIndex((item) => item.id === s.location_id) > -1 ? true : false;
  }

  selectSuggestion(s) {
    this.userSelects.find((item) => item.id === s.location_id) ? 
    this.userSelects = this.userSelects.filter((item) => item.id !== s.location_id) :
    console.log(s);
    this.userSelects.push(s.location_id);
    console.log(this.userSelects);
    // console.log(this.userSelects);
    
    // this.assignToNgModel();
  }

  deleteSelects(s) {
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id);
    this.assignToNgModel();
  }

  assignToNgModel() {
    this.userSelectsString = '';
    this.userSelects.map((item) => this.userSelectsString += item.locationName + ' ');
  }


    
  publishDetails(event, ageGroup, gender_type, messages_to_send) {
        
    var publishModel = {};
    console.log(ageGroup);
    console.log(gender_type);
    console.log(messages_to_send);
    
    console.log(this.userSelects);
    console.log(this.selectedBlockId);
    var age_as_per_advtPublishDate: any = { "text": ageGroup };
    var messages_to_send: any = { "text" : messages_to_send };
    publishModel['gender_type'] = gender_type;
    publishModel['age_as_per_advtPublishDate'] = ageGroup;
    publishModel['location_id'] = this.userSelects;
    publishModel['block_id'] = this.selectedBlockId;
    publishModel['message_to_send'] = messages_to_send;
    // publishModel['message_to_Send'] = messageToSend

    this .advertisepublishService.addPublish(publishModel).subscribe((data)=>{
        console.log(data);
        console.log("Successfully added !");
        
      }); 
    }
  }

