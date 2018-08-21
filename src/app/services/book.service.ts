import { Injectable } from '@angular/core';
import { IBookService } from '../interfaces/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse, IBookDetails, Idata } from '../models/viewModels';

@Injectable()
export class BookService {
    constructor(private db: AngularFireDatabase, private httpc: HttpClient) { }
    getPosts(): Observable<Idata[]> {
        return this.httpc.get<Idata[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getBooks(): Observable<IBookDetails[]> {
        return this.db.list<IBookDetails>('books').valueChanges();
    }
}
