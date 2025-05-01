import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalidadPhantomComponent } from './list-calidad-phantom.component';

describe('ListCalidadPhantomComponent', () => {
  let component: ListCalidadPhantomComponent;
  let fixture: ComponentFixture<ListCalidadPhantomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCalidadPhantomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCalidadPhantomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
