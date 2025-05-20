import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhantomComponent } from './create-phantom.component';

describe('CreatePhantomComponent', () => {
  let component: CreatePhantomComponent;
  let fixture: ComponentFixture<CreatePhantomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePhantomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePhantomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
