import { getTestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convater ';
  sudip='Entre Yeeweour USD value to convart INR';
 currentval=0; 
getvalue(val:number){
      this.currentval=val*72;
      console.log(this.currentval)
}
//   currentval=""; 
//  getvalue(val:string){
//       this.currentval=val;
//      console.log(this.currentval)
//  }

}
