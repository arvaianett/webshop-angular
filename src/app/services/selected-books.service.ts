import { Injectable } from '@angular/core';
import { GoogleApiBookResponse } from '../models/googleApiBookResponse';

@Injectable({
  providedIn: 'root'
})
export class SelectedBooksService {
  public selectedBooks: GoogleApiBookResponse[];

  constructor() {
    this.selectedBooks = [];
  }

  public addBookToSelectedList(book: GoogleApiBookResponse): void {
    if (this.getAllSelectedBooks().length !== 0) {
      this.selectedBooks = this.getAllSelectedBooks();
    }
    this.selectedBooks.push(book);
    this.saveSelectedBooksToLocalStorage();
  }

  public getAllSelectedBooks(): GoogleApiBookResponse[] {
    return JSON.parse(localStorage.getItem('selected-books'));
  }

  private saveSelectedBooksToLocalStorage(): void {
    localStorage.setItem('selected-books', JSON.stringify(this.selectedBooks));
  }
}
