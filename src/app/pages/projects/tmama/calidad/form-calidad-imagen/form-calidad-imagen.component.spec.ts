import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalidadImagenComponent } from './form-calidad-imagen.component';

describe('FormCalidadImagenComponent', () => {
  let component: FormCalidadImagenComponent;
  let fixture: ComponentFixture<FormCalidadImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalidadImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCalidadImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
