/*
  Author: Evelyn Zepeda
  Date: 4/7/24
  Title: composer-list.component.html
  Description: The composer-list page for the composer app.
*/

import {IComposer} from './composer.interface'

export class Composer {

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for( let composer of this.composers) {
      if(composer.composerId=== composerId) {
        return composer;
      }
    }
  }
}
