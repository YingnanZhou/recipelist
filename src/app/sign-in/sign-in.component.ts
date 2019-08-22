import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    //console.log(this.myForm['name'] ,this.myForm['password']);
    this.authService.signInUser(this.myForm.value['name'], this.myForm.value['password']);
    console.log(111);
    this.router.navigate(['/recipes']);
  }

}
