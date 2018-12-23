import { Component, OnInit, Input } from '@angular/core';
import { GoogleBookDataService } from '../../services/google-book-data.service';
import { GoogleApiBookResponse } from '../../models/googleApiBookResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('searchParam') searchParam: string;
  public searchBookResultHarryPotter: GoogleApiBookResponse[];
  public searchBookResult: GoogleApiBookResponse[];

  constructor(private googleBookDataService: GoogleBookDataService) { }

  ngOnInit() {
    this.searchBookResultHarryPotter = this.getHarryPotterSearchBookResult();
  }

  private getHarryPotterSearchBookResult(): GoogleApiBookResponse[] {
    return this.googleBookDataService.getHarryPotterResponse();
  }

  public searchEventHandler(param: string): void {
    this.getSearchBookResult(param);
  }

  private getSearchBookResult(param: string): void {
    this.searchBookResult = this.googleBookDataService.getSearchParameterBookResponse(param);
  }
}
