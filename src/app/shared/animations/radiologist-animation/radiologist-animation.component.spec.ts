import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologistAnimationComponent } from './radiologist-animation.component';

describe('RadiologistAnimationComponent', () => {
  let component: RadiologistAnimationComponent;
  let fixture: ComponentFixture<RadiologistAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiologistAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologistAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
