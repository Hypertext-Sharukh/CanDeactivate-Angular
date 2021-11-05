import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{RouterModule,Routes}from '@angular/router';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeactivateService } from './deactivate.service';
var myroutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent,canDeactivate:[DeactivateService]},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}
];
var myroutes2=RouterModule.forRoot(myroutes);


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myroutes2
    
  ],
  providers: [DeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
