
//  Author: Evelyn Zepeda
//  Date: 4/21/24
//  Title: Exercise 5.3 - Data Tables
//  File: books.service.ts

//Import statements
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  books: Array<IBook>;

  constructor() {

    //Creating the books objects
    this.books = [
      {
        isbn: '0345339681',
        title: 'The Hobbit',
        description: 'A simple hobbit by the name of Bilbo Baggins goes on an unexpected journey filled with adventure, dwarves, elves, wizards and dragons.',
        numOfPages: 322,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '0261103571',
        title: 'The Fellowship of the Ring',
        description: "The first volume in J.R.R. Tolkien's series The Lord of the Rings.",
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '1514297272',
        title: 'The Two Towers',
        description: "The second volume in J.R.R. Tolkien's series The Lord of the Rings.",
        numOfPages: 448,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '1514298139',
        title: 'The Return of the King',
        description: "The third volume in J.R.R. Tolkien's series The Lord of the Rings.",
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '9780593099322',
        title: 'Dune',
        description: "A science fiction masterpiece centered in the planet Arrakis where Paul Atreides and his family rule and control the most valuable resource in the galaxy.",
        numOfPages: 688,
        authors: ['Frank Herbert']
      }
    ]

  }
  //To return the books inside the BooksService class
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //To get the book by matching isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
