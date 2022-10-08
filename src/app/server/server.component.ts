import{ Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})
export class ServerComponent {
    username: string = "David Salako";

    Constructor(){
        this.username = "David Salako";
    }
    Updater(){
        this.username ="";
        return "Temitope Salako";
    
    }

}