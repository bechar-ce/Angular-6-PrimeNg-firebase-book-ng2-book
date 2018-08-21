import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata, IBookDetails } from '../../models/viewModels';
import { IBookService } from '../../interfaces/interfaces';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  coursesObservable: Observable<any[]>;
  public iPostsdata: Array<Idata> = [];
  public iBooksdatas: Array<IBookDetails> = [];
  constructor(@Inject('IBookService') public bookService: IBookService) {

    this.bookService.getPosts().subscribe(value => {
      this.iPostsdata = value;
    });

    this.bookService.getBooks().subscribe(value => {
      console.log('value:::getLicences', value);
      this.iBooksdatas = value;
    });
  }

}
