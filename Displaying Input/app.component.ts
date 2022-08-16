import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Getting A String Value From User';
  displayVal:String='';

  getValue(value:String){
    console.log(value);
    this.displayVal=value;
  }
}
