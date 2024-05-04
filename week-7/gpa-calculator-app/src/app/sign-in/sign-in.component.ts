//Author: Evelyn Zepeda
//Date: 5/3/24
//Assignment: Exercise 7.2 - Reactive Forms

//Declaring the import statements
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {}


  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  //Get form function that returns the signinForm controls
  get form() {
    return this.signinForm.controls;
  }
  //Adding a cookie to the user's browser and validating wether its a valid id.
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId)

    if(this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.'
    }
  }

}
