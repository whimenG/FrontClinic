import { TestBed } from '@angular/core/testing';

import { TestdatadisplayService } from './testdatadisplay.service';

describe('TestdatadisplayService', () => {
  let service: TestdatadisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestdatadisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
