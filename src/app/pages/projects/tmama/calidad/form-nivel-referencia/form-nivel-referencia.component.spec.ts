import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNivelReferenciaComponent } from './form-nivel-referencia.component';

describe('FormNivelReferenciaComponent', () => {
  let component: FormNivelReferenciaComponent;
  let fixture: ComponentFixture<FormNivelReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNivelReferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNivelReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
