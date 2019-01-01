import { Component, OnInit } from '@angular/core';
import { GoogleApiBookDetailsResponse } from '../../models/googleApiBookDetailsResponse';
import { SelectedBooksService } from '../../services/selected-books.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public selectedBooks: GoogleApiBookDetailsResponse[];

  constructor(private selectedBookService: SelectedBooksService) { }

  ngOnInit() {
    this.selectedBooks = this.getSelectedBooks();
  }

  private getSelectedBooks(): GoogleApiBookDetailsResponse[] {
    return this.selectedBookService.getAllSelectedBooks();
  }

  public clearBasket(): void {
    this.selectedBooks = [];
    this.selectedBookService.deleteAllSelectedBook();
  }
}
