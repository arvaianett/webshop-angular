import { TestBed, inject } from '@angular/core/testing';

import { SelectedBooksService } from './selected-books.service';

describe('SelectedBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedBooksService]
    });
  });

  it('should be created', inject([SelectedBooksService], (service: SelectedBooksService) => {
    expect(service).toBeTruthy();
  }));
});
