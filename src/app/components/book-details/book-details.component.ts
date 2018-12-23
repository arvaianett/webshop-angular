import { Component, OnInit } from '@angular/core';
import { GoogleApiBookResponse } from '../../models/googleApiBookResponse';
import { SelectedBooksService } from '../../services/selected-books.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleBookDataService } from '../../services/google-book-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public selectedBook: GoogleApiBookResponse;

  constructor(
    private selectedBooksService: SelectedBooksService,
    private googleBookDataService: GoogleBookDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedBook = this.getSelectedBookDetails(this.getSelectedBookIdFromUrl());
  }

  private getSelectedBookIdFromUrl(): string {
    let id: string;
    this.activatedRoute.params.subscribe(param => {
      id = param.id;
    });
    return id;
  }

  private getSelectedBookDetails(id: string): GoogleApiBookResponse {
    return this.googleBookDataService.getSelectedBookDetails(id);
  }

  public addToBasketEventHandler(): void {
    this.selectedBooksService.addBookToSelectedList(this.selectedBook);
  }
}
