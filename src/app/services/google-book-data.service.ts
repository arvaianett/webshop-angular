import { Injectable } from '@angular/core';
import { harryPotterResponse } from '../mock/HarryPotterResponse';
import { GoogleApiBookResponse } from '../models/googleApiBookResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookDataService {
  private harryPotterResponse: {};
  private googleApiBooksUrl: string;

  constructor(private http: HttpClient) {
    this.harryPotterResponse = harryPotterResponse;
    this.googleApiBooksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  }

  public getHarryPotterResponse(): GoogleApiBookResponse[] {
    return this.convertGoogleApiBookResponse(this.harryPotterResponse);
  }

  public getSearchParameterBookResponse(param: string): GoogleApiBookResponse[] {
    let searchResponse;
    this.http.get(this.googleApiBooksUrl + param).subscribe(
      response => searchResponse = this.convertGoogleApiBookResponse(response),
      error => console.error(error)
    );
    return searchResponse;
  }

  private convertGoogleApiBookResponse(apiResponse): GoogleApiBookResponse[] {
    const response: GoogleApiBookResponse[] = [];
    apiResponse.items.forEach(element => {
      const listElement: GoogleApiBookResponse = {
        id: element.id,
        title: element.volumeInfo.title,
        authors: element.volumeInfo.authors,
        description: element.volumeInfo.description,
        imageLink: element.volumeInfo.imageLinks.thumbnail
      };
      response.push(listElement);
    });
    return response;
  }

  public getSelectedBookDetails(id: string): GoogleApiBookResponse {
    return this.getHarryPotterResponse().filter(book => book.id === id)[0];
  }
}
