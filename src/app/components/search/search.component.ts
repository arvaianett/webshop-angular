import { Component, OnInit } from '@angular/core';
import { GoogleBookDataService } from '../../services/google-book-data.service';
import { GoogleApiBookResponse } from '../../models/googleApiBookResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchResult: GoogleApiBookResponse[];

  constructor(
    private googleBookDataService: GoogleBookDataService,
    private router: Router) { }

  ngOnInit() { }

  public searchByTitleEventHandler(param: string): void {
    this.getBookResultByTitle(param);
  }

  public searchByAuthorEventHandler(param: string): void {
    this.getBookResultByAuthor(param);
  }

  private getBookResultByAuthor(param: string): void {
    this.googleBookDataService.getSearchByAuthorBookResponse(param).subscribe(
      response => this.searchResult = this.convertGoogleApiBookResponse(response),
      error => console.error(error)
    );
  }

  private getBookResultByTitle(param: string): void {
    this.googleBookDataService.getSearchByTitleBookResponse(param).subscribe(
      response => this.searchResult = this.convertGoogleApiBookResponse(response),
      error => console.error(error)
    );
  }

  private convertGoogleApiBookResponse(apiResponse): GoogleApiBookResponse[] {
    try {
      const response: GoogleApiBookResponse[] = [];
      apiResponse.items.forEach(element => {
        const listElement: GoogleApiBookResponse = {
          id: element.id,
          title: element.volumeInfo.title,
          authors: element.volumeInfo.authors,
        };
        response.push(listElement);
      });
      return response;
    } catch (error) {
      console.error('no result');
    }
  }

  public bookDetailsEventHandler(book: GoogleApiBookResponse): void {
    this.router.navigate(['/book-details', book.id]);
  }
}
