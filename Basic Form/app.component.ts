import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Forms Module';
  userdata:any={};
  getuserdata(data:NgForm){
    console.log(data);
    this.userdata=data;
  }
}
