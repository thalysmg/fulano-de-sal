import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDiarioComponent } from './relatorio-diario.component';

describe('RelatorioDiarioComponent', () => {
  let component: RelatorioDiarioComponent;
  let fixture: ComponentFixture<RelatorioDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
