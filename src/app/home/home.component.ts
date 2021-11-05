import { Component, OnInit } from '@angular/core';
import{Deactivate} from '../deactivate';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstname:string=null;
  lastname:string=null;
  canNavigate:boolean=true;

  constructor() { }

  ngOnInit() {
  }
 onFirstNameChange(){
   this.canNavigate=false;
 }

 onlastNameChange(){
   this.canNavigate=false;
 }
 onSave(){
   this.canNavigate=true;
   alert("saved");
 }
}
