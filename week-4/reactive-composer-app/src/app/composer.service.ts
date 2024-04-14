import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})


//To export the Composer class
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName:"Ramin Djawadi", genre: "Classical"},
      {composerId: 101, fullName:"John Williams", genre: "Classical"},
      {composerId: 102, fullName:"Ludwig van Beethoven", genre: "Classical"},
      {composerId: 103, fullName:"Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 104, fullName:"Antonio Vivaldi", genre: "Classical"}
    ]
  }
  //A function that returns the composers
  getComposers() {
    return this.composers;
  }
  //A function that gets the composers by Id number
  getComposer(composerId: number) {
    for( let composer of this.composers) {
      if(composer.composerId=== composerId) {
        return composer;
      }
    }
  }
}
