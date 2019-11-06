import { TestBed, inject } from '@angular/core/testing';

import { NotafiscalentradaService } from './notafiscalentrada.service';

describe('NotafiscalentradaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotafiscalentradaService]
    });
  });

  it('should be created', inject([NotafiscalentradaService], (service: NotafiscalentradaService) => {
    expect(service).toBeTruthy();
  }));
});
