import { TestBed } from '@angular/core/testing';

import { ListdataService } from './listdata.service';

describe('ListdataService', () => {
  let service: ListdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
