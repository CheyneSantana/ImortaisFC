import { TestBed } from '@angular/core/testing';

import { ElencoService } from './elenco.service';

describe('ElencoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElencoService = TestBed.get(ElencoService);
    expect(service).toBeTruthy();
  });
});
