import { TestBed } from '@angular/core/testing';

import { CountryImageService } from './country-image.service';

describe('CountryImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryImageService = TestBed.get(CountryImageService);
    expect(service).toBeTruthy();
  });
});
