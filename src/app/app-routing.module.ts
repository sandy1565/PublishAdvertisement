import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from './personFormComponent/person-list/person-list.component';
import {PersonFormComponent} from './personFormComponent/person-form/person-form.component';
import {ViewPersonComponent} from './personFormComponent/view-person/view-person.component';
import {ViewAdvtComponent  } from "./advtDetailsComponent/view-advt/view-advt.component";
import {AdvtDetailsComponent} from './advtDetailsComponent/advt-details/advt-details.component';
import {AdvtDetailsListComponent} from './advtDetailsComponent/advt-details-list/advt-details-list.component';
import { AdvertisePublishComponent } from './advtPublishComponent/advertise-publish/advertise-publish.component';
import { ViewPublishComponent} from './advtPublishComponent/view-publish/view-publish.component';
import { LoginComponent } from './loginComponent/login/login.component';
import {DashbordComponentComponent} from './dashbord-component/dashbord-component.component';


const routes: Routes = [

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component: DashbordComponentComponent},

     {
       path:'view-person',component: ViewPersonComponent,
       children:[
         {path:'person-form',component:PersonFormComponent},
         {path:'person-list',component:PersonListComponent},
      
 
       ]},
      {
       path:'view-advt',component: ViewAdvtComponent,
       children:[
         {path:'advt-details',component:AdvtDetailsComponent},
         {path:'advt-details-list',component:AdvtDetailsListComponent}
         
       ]},

       {
         path:'view-publish',component:ViewPublishComponent,
         children:[
           {path:'advertise-publish', component:AdvertisePublishComponent}
         ]
       },

      //  {path: 'login, component:LoginComponent}
 

   
 
    
    

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//  export const routingComponents=  [PersonFormComponent,PersonListComponent];