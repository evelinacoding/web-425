// Author: Evelyn Zepeda
// Date: 4/28/24
// Title: Assignment 6.4 Input Properties
// Description: home.component.ts page

import { ITranscript } from './../transcript.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //Importing the ITranscript interface into a variable
  transcriptEntry: ITranscript;

  //Creating the grades variable
  selectableGrades: Array<string> = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

  //Creating an empty array for the entries
  transcriptEntries: Array<ITranscript>= [];

  //Creating the variable for the GPA total
  gpaTotal: number=0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  //The function to save the entry with the button click event
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  //A function to calculate results
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('Your grade is an A')
          gpa += 4.0;
          break;
          case 'A-':
          console.log('Your grade is an A-')
          gpa += 3.7;
          break;
          case 'B+':
          console.log('Your grade is an B+')
          gpa += 3.33;
          break;
          case 'B':
          console.log('Your grade is an B')
          gpa += 3.00
          break;
          case 'B-':
          console.log('Your grade is an B-')
          gpa += 2.70;
          break;
          case 'C+':
          console.log('Your grade is an C+')
          gpa += 2.30;
          break;
          case 'C':
          console.log('Your grade is an C')
          gpa += 2.00
          break;
          case 'C-':
          console.log('Your grade is an C-')
          gpa += 1.70
          break;
          case 'D+':
          console.log('Your grade is an D+')
          gpa += 1.30
          break;
          case 'D':
          console.log('Your grade is an D')
          gpa += 1.0
          break;
          case 'D-':
          console.log('Your grade is an D-')
          gpa += 0.70
          break;
          case 'F':
          console.log('Your grade is an F')
          gpa += 0.00
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  //To clear the entries with the button click event
  clearEntries() {
    this.transcriptEntries= [];
    this.gpaTotal= 0;

  }

}
