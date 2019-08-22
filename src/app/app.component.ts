import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  feature = 'recipe';
  onNavigate(flag: string){
    this.feature = flag;
    
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCgqFLnkxlQ0nYgBHjVa85yJdKmydFQy3c",
    authDomain: "ng-recipe-751ed.firebaseapp.com"
    })
    
  }
}
