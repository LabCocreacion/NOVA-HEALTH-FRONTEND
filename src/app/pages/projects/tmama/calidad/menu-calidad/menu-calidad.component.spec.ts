import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCalidadComponent } from './menu-calidad.component';

describe('MenuCalidadComponent', () => {
  let component: MenuCalidadComponent;
  let fixture: ComponentFixture<MenuCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCalidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
