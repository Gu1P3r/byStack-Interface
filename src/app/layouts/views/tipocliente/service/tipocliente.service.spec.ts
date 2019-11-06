import { TestBed, inject } from '@angular/core/testing';

import { TipoclienteService } from './tipocliente.service';

describe('TipoclienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoclienteService]
    });
  });

  it('should be created', inject([TipoclienteService], (service: TipoclienteService) => {
    expect(service).toBeTruthy();
  }));
});
