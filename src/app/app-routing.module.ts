import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routing } from './utils/constants';

import {BookstoreComponent} from './views/layouts';

// const routes: Routes = [];

const routes: Routes = [{
  path: '',
  component: BookstoreComponent,
  // canActivateChild: [AuthenGuard]
  children: [
    {
      path: '',
      loadChildren: () =>
       import('src/app/views/page/bookstore/bookstore.module').then(
         (m) => m.BookstoreModule
       )
    },
  ],
},
{ path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
