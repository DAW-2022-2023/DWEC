import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookResponse } from 'src/app/models/book.response.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css'],
})
export class HomePageComponent implements OnInit {

  public data: Book[];
  constructor(private bookService: BookService) {
    this.data = [];
  }
  ngOnInit(): void {
    this.bookService.getBookData().subscribe(res => this.data = res.data);
  }

}
