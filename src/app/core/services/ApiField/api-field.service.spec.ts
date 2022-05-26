import { TestBed } from '@angular/core/testing';

import { ApiFieldService } from './api-field.service';

describe('ApiFieldService', () => {
  let service: ApiFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
