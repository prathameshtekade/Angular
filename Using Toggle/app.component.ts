import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toggle the heading on button click';
  display=false;
  toggle(){
    this.display=!this.display;
    console.log(this.display);
  }
}
