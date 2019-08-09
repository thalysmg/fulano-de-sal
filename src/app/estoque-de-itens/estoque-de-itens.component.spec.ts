import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
