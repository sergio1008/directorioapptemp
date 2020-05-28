import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaModulosComponent } from './tabla-modulos.component';

describe('TablaModulosComponent', () => {
  let component: TablaModulosComponent;
  let fixture: ComponentFixture<TablaModulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaModulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
