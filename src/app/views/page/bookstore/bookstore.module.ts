import { NgModule } from '@angular/core';
import { BookstoreRoutingModule } from './bookstore-routing.module';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { SearchBooksComponent } from './bookstore/components/search-books/search-books.component';
import { AppSharedModule } from 'src/app/app-shared.module';
import { BookCardComponent } from './bookstore/components/book-card/book-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    BookstoreComponent,
    SearchBooksComponent,
    BookCardComponent
  ],
  imports: [
    BookstoreRoutingModule,
    MatCardModule,
    AppSharedModule
  ],

})

export class BookstoreModule { }
