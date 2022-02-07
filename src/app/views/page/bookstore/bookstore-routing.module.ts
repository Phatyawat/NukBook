import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routing } from 'src/app/utils/constants';
import { BookstoreComponent } from './bookstore/bookstore.component';


// const routes: Routes = [];

const routes: Routes = [{
  path: '', 
  component: BookstoreComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class BookstoreRoutingModule { }


