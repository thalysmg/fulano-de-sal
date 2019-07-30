import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaDadosComponent } from './atualiza-dados.component';

describe('AtualizaDadosComponent', () => {
  let component: AtualizaDadosComponent;
  let fixture: ComponentFixture<AtualizaDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
