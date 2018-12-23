import { Component, OnInit } from '@angular/core';
import { GoogleApiBookResponse } from '../../models/googleApiBookResponse';
import { SelectedBooksService } from '../../services/selected-books.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public selectedBooks: GoogleApiBookResponse[];

  constructor(private selectedBookService: SelectedBooksService) { }

  ngOnInit() {
    this.selectedBooks = this.getSelectedBooks();
  }

  private getSelectedBooks(): GoogleApiBookResponse[] {
    return this.selectedBookService.getAllSelectedBooks();
  }
}
