import { TestBed } from '@angular/core/testing';

import { AgendaImortaisService } from './agenda-imortais.service';

describe('AgendaImortaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendaImortaisService = TestBed.get(AgendaImortaisService);
    expect(service).toBeTruthy();
  });
});
