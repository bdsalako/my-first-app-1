import { Component } from '@angular/core'

@Component({
    selector: 'app-success',
    templateUrl: './successAlert.component.html',
    styles: ['.fontColor{ color: white}']
})

export class SuccessAlertComponent{
    username: string ="";
    disableButton = true;
    hidePassword = true;
    myClickA = [];
    counter = 0;

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

    DisplayDetail(){
        if((this.counter+1)%2 === 1){
            this.hidePassword = false;
        }
        else this.hidePassword = true;
        this.counter++;
        this.myClickA.push(this.counter); 
    }
        
        
}
