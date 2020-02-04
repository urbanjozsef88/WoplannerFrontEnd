import { TestBed } from '@angular/core/testing';

import { WorkoutHistoryService } from './workout-history.service';

describe('WorkoutHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutHistoryService = TestBed.get(WorkoutHistoryService);
    expect(service).toBeTruthy();
  });
});
