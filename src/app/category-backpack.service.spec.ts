import { TestBed } from '@angular/core/testing';

import { CategoryBackpackService } from './category-backpack.service';

describe('CategoryBackpackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryBackpackService = TestBed.get(CategoryBackpackService);
    expect(service).toBeTruthy();
  });
});
