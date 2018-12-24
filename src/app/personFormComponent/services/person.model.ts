export interface PersonModel{
     person_id:number;
     firstName :string;
     middleName :string;
     lastName :string;
     block_id :string;
     address :string; 
     floor_id :string;
     location_id :string;
     pincode :number;
     mobile_number1:string;
     mobile_number2:string;
     userName :string; 
     gender :string; 
     date_of_birth :Date; 
}


export class Block{
    public block_id:number;
    public blockName:string;
}

export class Location{
    public loaction_id:number;
    public locationName:string;
}

export class Floor{
 public floor_id:number;
 public floor_type: string; 
}