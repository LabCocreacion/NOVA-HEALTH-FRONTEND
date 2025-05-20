import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhantomsComponent } from './list-phantoms.component';

describe('ListPhantomsComponent', () => {
  let component: ListPhantomsComponent;
  let fixture: ComponentFixture<ListPhantomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPhantomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhantomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
