import { TestBed, inject } from '@angular/core/testing';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetsService]
    });
  });

  it('should ...', inject([PetsService], (service: PetsService) => {
    expect(service).toBeTruthy();
  }));
});
