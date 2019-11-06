import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotafiscalComponent } from './notafiscal.component';

describe('NotafiscalComponent', () => {
  let component: NotafiscalComponent;
  let fixture: ComponentFixture<NotafiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotafiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotafiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
