import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPrecoComponent } from './produto-preco.component';

describe('ProdutoPrecoComponent', () => {
  let component: ProdutoPrecoComponent;
  let fixture: ComponentFixture<ProdutoPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
