import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router:Router) { }
  
  _form = {
    
    username: '',
    
    password:''
  }

onSubmit(form: NgForm) {
  console.log(form.value);
  this.loginService.getLogin(form.value)
    .subscribe((data) => {
      console.log(data);
      
      if(data.status==200){
        this.router.navigate(['./dashboard']);
      }
      else{
        alert("wrong credentials");
      }
        
   });
 

  }
}