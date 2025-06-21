import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesesCalidadComponent } from './list-meses-calidad.component';

describe('ListMesesCalidadComponent', () => {
  let component: ListMesesCalidadComponent;
  let fixture: ComponentFixture<ListMesesCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMesesCalidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMesesCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
