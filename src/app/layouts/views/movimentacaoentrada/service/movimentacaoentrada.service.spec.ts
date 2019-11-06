import { TestBed, inject } from '@angular/core/testing';

import { MovimentacaoentradaService } from './movimentacaoentrada.service';

describe('MovimentacaoentradaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimentacaoentradaService]
    });
  });

  it('should be created', inject([MovimentacaoentradaService], (service: MovimentacaoentradaService) => {
    expect(service).toBeTruthy();
  }));
});
