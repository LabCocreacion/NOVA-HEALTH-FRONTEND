import { TestBed } from '@angular/core/testing';

import { TamizacionMamaService } from './tamizacion-mama.service';

describe('TamizacionMamaService', () => {
  let service: TamizacionMamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamizacionMamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
