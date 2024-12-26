import { TestBed } from '@angular/core/testing';

import { CounterSubjectService } from './counter-subject.service';

describe('CounterSubjectService', () => {
  let service: CounterSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
