import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'COUNTER APP';
  count: number = 0;

  increment = () => {
    
    if(this.count==10){
    }else{
      this.count = this.count+1;
    }
  }

  decrement = () => {
    
    if(this.count==0){
    }else{
      this.count = this.count-1;
    }
  }

  reset = () => {this.count = 0;}
}
