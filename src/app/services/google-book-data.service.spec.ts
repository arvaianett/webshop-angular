import { TestBed, inject } from '@angular/core/testing';

import { GoogleBookDataService } from './google-book-data.service';

describe('GoogleBookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBookDataService]
    });
  });

  it('should be created', inject([GoogleBookDataService], (service: GoogleBookDataService) => {
    expect(service).toBeTruthy();
  }));
});
