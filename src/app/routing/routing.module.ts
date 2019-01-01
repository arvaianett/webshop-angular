import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from '../components/basket/basket.component';
import { SearchComponent } from '../components/search/search.component';
import { BookDetailsComponent } from '../components/book-details/book-details.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
