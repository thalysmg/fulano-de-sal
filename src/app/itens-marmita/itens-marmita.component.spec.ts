import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensMarmitaComponent } from './itens-marmita.component';

describe('ItensMarmitaComponent', () => {
  let component: ItensMarmitaComponent;
  let fixture: ComponentFixture<ItensMarmitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensMarmitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensMarmitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
