import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Getting A String Value From User';
  count=0;
  counter(type:string){
    type === 'add'? this.count++ : this.count--;

  }
  }
