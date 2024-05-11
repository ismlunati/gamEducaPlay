import { TestBed } from '@angular/core/testing';

import { ArtefactoService } from './artefacto.service';

describe('ArtefactoService', () => {
  let service: ArtefactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtefactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
