import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'

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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  //A function that gets the composers by Id number
  getComposer(composerId: number) {
    for( let composer of this.composers) {
      if(composer.composerId=== composerId) {
        return composer;
      }
    }
  }
  //To filter composers
  //The pipe operator is a built in function that alows us to chain functions together
  //The map function is used when we want to return a new array of objects
  //The filter function filters the array of data
  filterComposers(name:string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)> -1)))
  }
}
