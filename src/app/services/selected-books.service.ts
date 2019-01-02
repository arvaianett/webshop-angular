import { Injectable } from '@angular/core';
import { GoogleApiBookDetailsResponse } from '../models/googleApiBookDetailsResponse';

@Injectable({
  providedIn: 'root'
})
export class SelectedBooksService {
  public selectedBooks: GoogleApiBookDetailsResponse[];

  constructor() {
    this.selectedBooks = [];
  }

  public addBookToSelectedList(book: GoogleApiBookDetailsResponse): void {
    this.setSelectedBooksList();
    this.selectedBooks.push(book);
    this.setSelectedBooksToLocalStorage();
  }

  private setSelectedBooksList(): void {
    if (this.getAllSelectedBooks() && this.getAllSelectedBooks().length !== 0) {
      this.selectedBooks = this.getAllSelectedBooks();
    }
  }

  public getAllSelectedBooks(): GoogleApiBookDetailsResponse[] {
    return JSON.parse(localStorage.getItem('selected-books'));
  }

  public deleteAllSelectedBook(): void {
    this.selectedBooks = [];
    this.setSelectedBooksToLocalStorage();
  }

  private setSelectedBooksToLocalStorage(): void {
    localStorage.setItem('selected-books', JSON.stringify(this.selectedBooks));
  }
}
