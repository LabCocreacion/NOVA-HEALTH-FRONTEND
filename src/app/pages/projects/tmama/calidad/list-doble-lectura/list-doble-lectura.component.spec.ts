import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDobleLecturaComponent } from './list-doble-lectura.component';

describe('ListDobleLecturaComponent', () => {
  let component: ListDobleLecturaComponent;
  let fixture: ComponentFixture<ListDobleLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDobleLecturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDobleLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
