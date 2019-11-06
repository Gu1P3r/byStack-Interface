import { TestBed, inject } from '@angular/core/testing';

import { NomeStorageService } from './nome-storage.service';

describe('NomeStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomeStorageService]
    });
  });

  it('should be created', inject([NomeStorageService], (service: NomeStorageService) => {
    expect(service).toBeTruthy();
  }));
});
