import { Component } from '@angular/core'

@Component({
    selector: 'app-success',
    templateUrl: './successAlert.component.html',
    styleUrls: ['./successAlert.component.css']
})

export class SuccessAlertComponent{
    username: string ="";
    disableButton = true;

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
}