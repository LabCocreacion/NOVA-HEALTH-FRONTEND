import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRellenadoComponent } from './form-rellenado.component';

describe('FormRellenadoComponent', () => {
  let component: FormRellenadoComponent;
  let fixture: ComponentFixture<FormRellenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRellenadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRellenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
