import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

counter: number = 0;
@Output() startCounter: EventEmitter<any> = new EventEmitter();
@Output() stopCounter: EventEmitter<any> = new EventEmitter();


  constructor() { 
    setTimeout(()=>{
      this.Incremental();
    }, 1000);
  }

  ngOnInit(): void {
  }
  Incremental(){
    this.counter++;
  }

}
