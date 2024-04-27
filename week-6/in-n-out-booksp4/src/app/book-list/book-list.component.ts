//  Author: Evelyn Zepeda
//  Date: 4/26/24
//  Title: Assignment 5.4 - Dialogs
//  File: book-list.component.ts

//The import statements
import { Component, OnInit } from '@angular/core';
import { BooksService} from '../books.service'
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


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

  constructor(private booksService: BooksService, private dialog: MatDialog) {

    this.books = this.booksService.getBooks();

  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);


    //Creating the dialogRef variable
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },

      disableClose: true,
      width: '800px'
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm') {
        this.book = null;
      }
    });
  }
}
