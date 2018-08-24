import { Injectable } from '@angular/core';
import { IBookService } from '../interfaces/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse, IBookDetails, Idata } from '../models/viewModels';

@Injectable({ providedIn: 'root' })
export class BookService implements IBookService {
    getPosts: () => Observable<Idata[]>;
    getBooksFromFirebase: () => Observable<IBookDetails[]>;
    getBooksFromJSON: () => Observable<IBookDetails[]>;
    constructor(private db: AngularFireDatabase, private httpc: HttpClient) {
        this.getPosts = () => {
            return this.httpc.get<Idata[]>('https://jsonplaceholder.typicode.com/posts');
        };

        this.getBooksFromFirebase = () => {
            return this.db.list<IBookDetails>('books').valueChanges();
        };

        this.getBooksFromJSON = () => {
            return this.httpc.get<IBookDetails[]>('api/books-json.json');
        };
    }

}
