import { TestBed, inject } from '@angular/core/testing';

import { FornecedorFornecedorService } from './fornecedor-fornecedor.service';

describe('FornecedorFornecedorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FornecedorFornecedorService]
    });
  });

  it('should be created', inject([FornecedorFornecedorService], (service: FornecedorFornecedorService) => {
    expect(service).toBeTruthy();
  }));
});
