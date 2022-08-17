import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Style Binding';
  color='red';
  bgcolor='yellow';
  updatecolor(){
    this.color='blue';
  }
  updatebgcolor(){
  this.bgcolor='pink';
  }
}
