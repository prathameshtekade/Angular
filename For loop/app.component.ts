import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'for Loop';
  users=['prathamesh','tekade','pratik','krushna'];
userdetails=[
  {name:'Prathamesh',email:'pattya@gmail.com',phone:'7378999166'} ,
  {name:'tekade',email:'tekade@gmail.com',phone:'7378999165'},
  {name:'pratik',email:'pratik@gmail.com',phone:'7378999167'},

  {name:'krushna',email:'pattya@gmail.com',phone:'7378999168'}
 
];
}
