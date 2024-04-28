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
  selectableGrades: Array<string>=["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

  //Creating an empty array for the entries
  transcriptEntries: Array<ITranscript>=[];

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  //The function to save the entry
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

}
