import { TestBed } from '@angular/core/testing';

import { RespuestaService } from './features/respuesta/respuesta.service';

describe('RespuestaService', () => {
  let service: RespuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
