import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

<<<<<<< HEAD
describe('UserServiceService', () => {
=======
describe('UserService', () => {
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
