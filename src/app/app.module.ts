import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule   } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './personFormComponent/person-form/person-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PersonListComponent } from './personFormComponent/person-list/person-list.component';
import { SearchlistPipe } from './personFormComponent/person-list/searchlist.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdvtDetailsComponent } from './advtDetailsComponent/advt-details/advt-details.component';
import { AdvtDetailsListComponent } from './advtDetailsComponent/advt-details-list/advt-details-list.component';
import { SearchAdvtDetailsPipe } from './advtDetailsComponent/advt-details-list/search-advt-details.pipe';
import { ViewPersonComponent } from './personFormComponent/view-person/view-person.component';
import { ViewAdvtComponent } from './advtDetailsComponent/view-advt/view-advt.component';
import { ViewPublishComponent } from './advtPublishComponent/view-publish/view-publish.component';
import { AdvertisePublishComponent } from './advtPublishComponent/advertise-publish/advertise-publish.component';
import { NgxClickToEditModule } from 'ngx-click-to-edit';
import { LoginComponent } from './loginComponent/login/login.component';
import { DashbordComponentComponent } from './dashbord-component/dashbord-component.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    SearchlistPipe,
    AdvtDetailsComponent,
    AdvtDetailsListComponent,
    SearchAdvtDetailsPipe,
    ViewPersonComponent,
    ViewAdvtComponent,
    ViewPublishComponent,
    AdvertisePublishComponent,
    LoginComponent,
    DashbordComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxClickToEditModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
