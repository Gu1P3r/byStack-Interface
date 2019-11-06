import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoentradaComponent } from './movimentacaoentrada.component';

describe('MovimentacaoentradaComponent', () => {
  let component: MovimentacaoentradaComponent;
  let fixture: ComponentFixture<MovimentacaoentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
