import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraFuncionalidadComponent } from './cabecera-funcionalidad.component';

describe('CabeceraFuncionalidadComponent', () => {
  let component: CabeceraFuncionalidadComponent;
  let fixture: ComponentFixture<CabeceraFuncionalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraFuncionalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraFuncionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
