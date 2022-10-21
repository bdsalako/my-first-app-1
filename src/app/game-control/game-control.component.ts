import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

counter: number = 0;
@Output() evenNumber: EventEmitter<any> = new EventEmitter();
@Output() oddNumber: EventEmitter<any> = new EventEmitter();


  constructor() { 
   
  }

  ngOnInit(): void {
  }

  Incremental(){
     setTimeout(()=>{
      this.counter++;
      if(this.counter%2 == 0){
        this.evenNumber.emit(this.counter);
      } else {
        this.oddNumber.emit(this.counter);
      }
      this.Incremental
    }, 1000);
  }

}
