import { Component } from '@angular/core'

@Component({
    selector: 'app-success',
    templateUrl: './successAlert.component.html',
    styleUrls: ['./successAlert.component.css']
})

export class SuccessAlertComponent{
    username: string ="";
    disableButton = true;
    hidePassword = true;
    myClick = [];
    counter = 1;

    Constructor(){

    }
    UserEntry(event : Event){
        this.username = (<HTMLInputElement>event.target).value;
        if(this.username === ""){
            this.disableButton = true;
        }
        else this.disableButton = false;
    }

    EnableButton(){
        return this.disableButton;
    }
    
    ResetUsername(){     
    }

    DisplayDetail(){
        if(this.counter%2 === 1){
            this.hidePassword = false;
        }
        else this.hidePassword = true;
        this.counter++;
        this.myClick.push(Date.now)
    }

    //RegisterClicks(){
       // this.myClick.push(Math.random)
   // }

}