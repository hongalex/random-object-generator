import { TestBed, inject } from '@angular/core/testing';
import { RandomItemService } from './random-item.service';

describe('RandomItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomItemService]
    });
  });

  it('should ...', inject([RandomItemService], (service: RandomItemService) => {
    expect(service).toBeTruthy();
  }));
});
