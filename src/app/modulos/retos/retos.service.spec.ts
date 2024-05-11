import { TestBed } from '@angular/core/testing';

import { RetosService } from './retos.service';

describe('RetosService', () => {
  let service: RetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
