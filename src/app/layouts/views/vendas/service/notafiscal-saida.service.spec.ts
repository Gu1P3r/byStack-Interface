import { TestBed, inject } from '@angular/core/testing';

import { NotafiscalSaidaService } from './notafiscal-saida.service';

describe('NotafiscalSaidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotafiscalSaidaService]
    });
  });

  it('should be created', inject([NotafiscalSaidaService], (service: NotafiscalSaidaService) => {
    expect(service).toBeTruthy();
  }));
});
