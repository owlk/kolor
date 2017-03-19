import { TestBed, inject } from '@angular/core/testing';

import { ColorCalculationService } from './color-calculation.service';

describe('ColorCalculationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorCalculationService]
    });
  });

  it('should ...', inject([ColorCalculationService], (service: ColorCalculationService) => {
    expect(service).toBeTruthy();
  }));
});
