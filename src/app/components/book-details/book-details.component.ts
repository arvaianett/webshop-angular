import { Component, OnInit } from '@angular/core';
import { GoogleApiBookDetailsResponse } from '../../models/googleApiBookDetailsResponse';
import { SelectedBooksService } from '../../services/selected-books.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleBookDataService } from '../../services/google-book-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public selectedBook: GoogleApiBookDetailsResponse;
  public successApiResult: boolean;

  constructor(
    private selectedBooksService: SelectedBooksService,
    private googleBookDataService: GoogleBookDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadPage();
  }

  private loadPage(): void {
    this.getSelectedBookDetails(this.getSelectedBookIdFromUrl());
  }

  private getSelectedBookIdFromUrl(): string {
    let id: string;
    this.activatedRoute.params.subscribe(param => id = param.id);
    return id;
  }

  private getSelectedBookDetails(id: string): void {
    this.googleBookDataService.getBookDetails(id).subscribe(
      response => {
        this.selectedBook = this.convertGoogleApiBookResponse(response);
        this.successApiResult = true;
      },
      error => console.error(error)
    );
  }

  private convertGoogleApiBookResponse(apiResponse): GoogleApiBookDetailsResponse {
    const bookDetails: GoogleApiBookDetailsResponse = {
      id: apiResponse.id,
      title: apiResponse.volumeInfo.title,
      authors: apiResponse.volumeInfo.authors,
      description: apiResponse.volumeInfo.description,
      imageLink: apiResponse.volumeInfo.imageLinks.thumbnail
    };
    return bookDetails;
  }

  public addToBasketEventHandler(): void {
    this.selectedBooksService.addBookToSelectedList(this.selectedBook);
  }
}
