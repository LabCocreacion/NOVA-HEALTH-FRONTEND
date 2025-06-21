import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDobleLecturaComponent } from './form-doble-lectura.component';

describe('FormDobleLecturaComponent', () => {
  let component: FormDobleLecturaComponent;
  let fixture: ComponentFixture<FormDobleLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDobleLecturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDobleLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
