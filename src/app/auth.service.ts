import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  signUpUser(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password).catch(
      (error) => {
        console.log(error);
      }
    )
  }
  signInUser(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username, password).then(
      () => {
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => {this.token = token}
          
        )
      },
      this.router.navigate['/']
    ).catch(
      (error) => {
        console.log(error);
      }
    )
    
  }

getT() {
  firebase.auth().currentUser.getIdToken().then(
    (token: string) => this.token = token
  );
  return this.token;
}
isAuth() {
  return this.token != null;
}
logOut() {
  firebase.auth().signOut();
  this.token = null;
}
  constructor(private router: Router) { }
}
