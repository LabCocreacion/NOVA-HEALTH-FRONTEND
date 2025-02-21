import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCirujanoFormComponent } from './add-cirujano-form.component';

describe('AddCirujanoFormComponent', () => {
  let component: AddCirujanoFormComponent;
  let fixture: ComponentFixture<AddCirujanoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCirujanoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCirujanoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
