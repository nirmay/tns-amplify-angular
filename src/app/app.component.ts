import { Component } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";
//import { AmplifyService } from "aws-amplify";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    signedIn: boolean;
    user: any;
    greeting: string;
    constructor( private amplifyService: AmplifyService ) {
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    this.user = authState.user;
                    this.greeting = "Hello " + this.user.username;
                }
        });
    }
}
