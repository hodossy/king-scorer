import { TestBed } from '@angular/core/testing';

import { RoundScorerService } from './round-scorer.service';

describe('RoundScorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoundScorerService = TestBed.get(RoundScorerService);
    expect(service).toBeTruthy();
  });
});
