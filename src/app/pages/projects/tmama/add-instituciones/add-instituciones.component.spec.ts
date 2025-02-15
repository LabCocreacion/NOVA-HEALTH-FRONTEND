import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitucionesComponent } from './add-instituciones.component';

describe('AddInstitucionesComponent', () => {
  let component: AddInstitucionesComponent;
  let fixture: ComponentFixture<AddInstitucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstitucionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
