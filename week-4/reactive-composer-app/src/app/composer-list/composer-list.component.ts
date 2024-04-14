/**
 * Title: composer-list.component.ts
 * Author: Evelyn Zepeda
 * Date: 4/6/24
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService} from '../composer.service'
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//To export the Composer List Component
export class ComposerListComponent implements OnInit {

  //A variable for txtSearchControl
  txtSearchControl = new FormControl('');

  //Creating the composers array
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    //Subscribe method that listens for value changes and calls filterComposer function
    //Debounce is used to slow down the number of times the filter Composer function is called
    //If debounce is not added every time a word is input the function would be called
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val))
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
