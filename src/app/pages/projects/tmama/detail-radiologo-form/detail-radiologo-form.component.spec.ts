import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRadiologoFormComponent } from './detail-radiologo-form.component';

describe('DetailRadiologoFormComponent', () => {
  let component: DetailRadiologoFormComponent;
  let fixture: ComponentFixture<DetailRadiologoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRadiologoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRadiologoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
