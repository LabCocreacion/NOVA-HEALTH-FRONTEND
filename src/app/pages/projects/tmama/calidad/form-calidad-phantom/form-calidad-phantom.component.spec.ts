import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalidadPhantomComponent } from './form-calidad-phantom.component';

describe('FormCalidadPhantomComponent', () => {
  let component: FormCalidadPhantomComponent;
  let fixture: ComponentFixture<FormCalidadPhantomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalidadPhantomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCalidadPhantomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
