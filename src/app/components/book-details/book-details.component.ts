import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata, IBookDetails } from '../../models/viewModels';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  getPosts: () => void;
  getBooksFirebase: () => void;
  getBooksJSON: () => void;
  public iPostsdata: Array<Idata> = [];
  public iBooksdatas: Array<IBookDetails> = [];
  public iBookJsonData: Array<IBookDetails> = [];

  ngOnInit() {
    this.getPosts();
    this.getBooksFirebase();
    this.getBooksJSON();
  }

  constructor(private bookService: BookService) {
    this.getPosts = () => {
      this.bookService.getPosts().subscribe(value => {
        console.log('value:::', value);
        this.iPostsdata = value;
      });
    };

    this.getBooksFirebase = () => {
      this.bookService.getBooksFromFirebase().subscribe(value => {
        this.iBooksdatas = value;
      });
    };

    this.getBooksJSON = () => {
      this.bookService.getBooksFromJSON().subscribe(value => {
        this.iBookJsonData = value;
      });
    };
  }
}
