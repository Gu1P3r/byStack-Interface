import { TestBed, inject } from '@angular/core/testing';
import { MovimentacaoSaidaService } from './movimentacao-saida.service';

describe('MovimentaoSaidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimentacaoSaidaService]
    });
  });

  it('should be created', inject([MovimentacaoSaidaService], (service: MovimentacaoSaidaService) => {
    expect(service).toBeTruthy();
  }));
});
