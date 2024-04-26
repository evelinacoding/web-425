//  Author: Evelyn Zepeda
//  Date: 4/21/24
//  Title: Exercise 5.2 Navigation and Layout
//  File: book-list.component.ts

//The import statements
import { Component, OnInit } from '@angular/core';
import { BooksService} from '../books.service'
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

//To export the BookList Component
export class BookListComponent implements OnInit {

  //Creating the variables
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {

    this.books = this.booksService.getBooks();

  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book)
  }

}
