import { TestBed } from '@angular/core/testing';

import { BackpackItemService } from './backpack-item.service';

describe('BackpackItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackpackItemService = TestBed.get(BackpackItemService);
    expect(service).toBeTruthy();
  });
});
