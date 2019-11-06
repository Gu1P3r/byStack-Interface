import { TestBed, inject } from '@angular/core/testing';

import { ProdutoPrecoService } from './produto-preco.service';

describe('ProdutoPrecoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoPrecoService]
    });
  });

  it('should be created', inject([ProdutoPrecoService], (service: ProdutoPrecoService) => {
    expect(service).toBeTruthy();
  }));
});
