import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHojaRadarComponent } from './form-hoja-radar.component';

describe('FormHojaRadarComponent', () => {
  let component: FormHojaRadarComponent;
  let fixture: ComponentFixture<FormHojaRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHojaRadarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHojaRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
