import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProporcionBiradsComponent } from './form-proporcion-birads.component';

describe('FormProporcionBiradsComponent', () => {
  let component: FormProporcionBiradsComponent;
  let fixture: ComponentFixture<FormProporcionBiradsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProporcionBiradsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProporcionBiradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
