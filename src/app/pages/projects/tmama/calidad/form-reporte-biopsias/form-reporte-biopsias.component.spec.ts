import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReporteBiopsiasComponent } from './form-reporte-biopsias.component';

describe('FormReporteBiopsiasComponent', () => {
  let component: FormReporteBiopsiasComponent;
  let fixture: ComponentFixture<FormReporteBiopsiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReporteBiopsiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReporteBiopsiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
