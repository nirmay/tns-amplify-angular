import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
require('nativescript-nodeify');
import Amplify, { Auth } from 'aws-amplify';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable()
export class AuthService {

  loggedIn: BehaviorSubject<boolean>;
  amplify: {
    Auth: {
    }
  }

  constructor(
    private router: Router
  ) {
    Amplify.configure(this.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  public signUp(email, password): Observable<any> {
    return fromPromise(Auth.signUp(email, password));
  }

  /** confirm code 
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }*/

  /** signin 
  public signIn(email, password): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }*/

  /** get authenticat state 
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }*/

  /** signout 
  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }*/
}
