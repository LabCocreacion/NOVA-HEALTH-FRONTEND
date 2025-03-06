import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRadiologoFormComponent } from './add-radiologo-form.component';

describe('AddRadiologoFormComponent', () => {
  let component: AddRadiologoFormComponent;
  let fixture: ComponentFixture<AddRadiologoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRadiologoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRadiologoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
