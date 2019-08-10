import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirMarmitaComponent } from './pedir-marmita.component';

describe('PedirMarmitaComponent', () => {
  let component: PedirMarmitaComponent;
  let fixture: ComponentFixture<PedirMarmitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirMarmitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirMarmitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
