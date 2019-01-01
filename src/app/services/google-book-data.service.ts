import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookDataService {
  private baseGoogleApiUrl: string;
  private searchGoogleApiUrl: string;

  constructor(private http: HttpClient) {
    this.baseGoogleApiUrl = 'https://www.googleapis.com/books/v1/volumes/';
    this.searchGoogleApiUrl = 'https://www.googleapis.com/books/v1/volumes/?q=';
  }

  public getSearchByTitleBookResponse(param: string): Observable<Object> {
    return this.http.get(this.searchGoogleApiUrl + 'intitle:' + '"' + param + '"');
  }

  public getSearchByAuthorBookResponse(param: string): Observable<Object> {
    return this.http.get(this.searchGoogleApiUrl + 'inauthor:' + '"' + param + '"');
  }

  public getBookDetails(id: string): Observable<Object> {
    return this.http.get(this.baseGoogleApiUrl + id);
  }
}
