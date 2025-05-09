import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesListComponent } from './pacientes-list.component';

describe('PacientesListComponent', () => {
  let component: PacientesListComponent;
  let fixture: ComponentFixture<PacientesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
