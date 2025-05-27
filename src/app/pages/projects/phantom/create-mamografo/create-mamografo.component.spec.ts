import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMamografoComponent } from './create-mamografo.component';

describe('CreateMamografoComponent', () => {
  let component: CreateMamografoComponent;
  let fixture: ComponentFixture<CreateMamografoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMamografoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMamografoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
