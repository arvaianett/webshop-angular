import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BasketComponent } from './components/basket/basket.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { GoogleBookDataService } from './services/google-book-data.service';
import { SelectedBooksService } from './services/selected-books.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookDetailsComponent,
    BasketComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    GoogleBookDataService,
    SelectedBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
