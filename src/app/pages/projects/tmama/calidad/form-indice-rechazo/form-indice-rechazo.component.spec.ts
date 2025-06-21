import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndiceRechazoComponent } from './form-indice-rechazo.component';

describe('FormIndiceRechazoComponent', () => {
  let component: FormIndiceRechazoComponent;
  let fixture: ComponentFixture<FormIndiceRechazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIndiceRechazoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndiceRechazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
