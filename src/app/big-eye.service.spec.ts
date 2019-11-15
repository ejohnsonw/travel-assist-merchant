import { TestBed } from '@angular/core/testing';

import { BigEyeService } from './big-eye.service';

describe('BigEyeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigEyeService = TestBed.get(BigEyeService);
    expect(service).toBeTruthy();
  });
});
