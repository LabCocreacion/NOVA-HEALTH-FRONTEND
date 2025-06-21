import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlCalidadComponent } from './form-control-calidad.component';

describe('FormControlCalidadComponent', () => {
  let component: FormControlCalidadComponent;
  let fixture: ComponentFixture<FormControlCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlCalidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
