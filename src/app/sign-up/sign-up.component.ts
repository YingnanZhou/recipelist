import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    const username = myForm.value.name;
    const password = myForm.value.password;
    console.log(username+ ''+ password)
    this.authService.signUpUser(username, password);

  }
}
