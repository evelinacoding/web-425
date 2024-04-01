import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName:string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //Creating the composers array
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Ramin Djawadi", "Classical"),
      new Composer("John Williams", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Antonio Vivaldi", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
