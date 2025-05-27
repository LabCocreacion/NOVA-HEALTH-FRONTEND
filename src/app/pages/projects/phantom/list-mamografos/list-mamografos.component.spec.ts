import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMamografosComponent } from './list-mamografos.component';

describe('ListMamografosComponent', () => {
  let component: ListMamografosComponent;
  let fixture: ComponentFixture<ListMamografosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMamografosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMamografosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
