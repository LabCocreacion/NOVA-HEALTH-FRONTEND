import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamographyComponent } from './mamography.component';

describe('MamographyComponent', () => {
  let component: MamographyComponent;
  let fixture: ComponentFixture<MamographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
