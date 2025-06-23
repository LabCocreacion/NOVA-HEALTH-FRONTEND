import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDevelopComponent } from './page-develop.component';

describe('PageDevelopComponent', () => {
  let component: PageDevelopComponent;
  let fixture: ComponentFixture<PageDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDevelopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
