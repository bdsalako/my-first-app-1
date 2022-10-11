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
    myClickB = [];
    counter = 0;
    hideParagraph = true;

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
        if(this.counter < 5){
            this.myClickA.push(this.counter);
            this.myClickB = this.myClickA;  
        }
        else 
        {
            this.myClickB.push(this.counter);
            this.hideParagraph = false;
        }
        
    }

    GetColor(){
        return this.counter > 5 ? 'blue' : 'white';
    }

    RemoveItem(){
        this.myClickA.pop();
    }

    test(){
        return this.myClickA.pop();
    }
    

}