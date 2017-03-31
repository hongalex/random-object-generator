import { TestBed, inject } from '@angular/core/testing';
import { SecureRandomNumberService } from './secure-random-number.service';

describe('SecureRandomNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureRandomNumberService]
    });
  });

  it('should ...', inject([SecureRandomNumberService], (service: SecureRandomNumberService) => {
    expect(service).toBeTruthy();
  }));
});
