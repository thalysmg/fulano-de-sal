import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDeItensComponent } from './estoque-de-itens.component';

describe('EstoqueDeItensComponent', () => {
  let component: EstoqueDeItensComponent;
  let fixture: ComponentFixture<EstoqueDeItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueDeItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueDeItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
