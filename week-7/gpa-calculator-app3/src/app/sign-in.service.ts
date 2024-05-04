//Author: Evelyn Zepeda
//Date: 5/3/24
//Assignment: Exercise 7.2 - Reactive Forms

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //Creating a variable for the student id's array
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];


  }
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
