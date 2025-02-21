import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatologoFormComponent } from './add-patologo-form.component';

describe('AddPatologoFormComponent', () => {
  let component: AddPatologoFormComponent;
  let fixture: ComponentFixture<AddPatologoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatologoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatologoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
