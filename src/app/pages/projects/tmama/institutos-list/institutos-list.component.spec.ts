import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutosListComponent } from './institutos-list.component';

describe('InstitutosListComponent', () => {
  let component: InstitutosListComponent;
  let fixture: ComponentFixture<InstitutosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
