// Author: Evelyn Zepeda
// Date: 4/28/24
// Title: Assignment 6.4 - Input Properties

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //For the GPA Total number
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
