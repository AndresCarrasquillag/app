/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosauriosService } from './dinosaurios.service';

describe('Service: Dinosaurios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosauriosService]
    });
  });

  it('should ...', inject([DinosauriosService], (service: DinosauriosService) => {
    expect(service).toBeTruthy();
  }));
});
