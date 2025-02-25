import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstitucionesMapComponent } from './list-instituciones-map.component';

describe('ListInstitucionesMapComponent', () => {
  let component: ListInstitucionesMapComponent;
  let fixture: ComponentFixture<ListInstitucionesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInstitucionesMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInstitucionesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
