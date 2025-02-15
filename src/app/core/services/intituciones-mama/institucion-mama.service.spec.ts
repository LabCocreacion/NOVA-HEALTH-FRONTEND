import { TestBed } from '@angular/core/testing';

import { InstitucionMamaService } from './institucion-mama.service';

describe('InstitucionMamaService', () => {
  let service: InstitucionMamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitucionMamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
