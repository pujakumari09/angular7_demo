import { Component } from '@angular/core';

@Component({
  selector: 'app-root-first',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JS 7 Project';
  todaydate = new Date();

  jsonval = {name: 'Rox', age:25, adress:{a1: 'Mumbai', a2:'Karnataka'}};

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  isavailable = false;

  myClickFunction(event){
    this.isavailable = !this.isavailable;
  }

  changeMonths(event){
    alert("here are the changing months options");
  }
}
