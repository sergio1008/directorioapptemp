import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioAplicacionesComponent } from './directorio-aplicaciones.component';

describe('DirectorioAplicacionesComponent', () => {
  let component: DirectorioAplicacionesComponent;
  let fixture: ComponentFixture<DirectorioAplicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioAplicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
