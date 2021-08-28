import { TestBed } from '@angular/core/testing';

import { StoryShareService } from './story-share.service';

describe('StoryShareService', () => {
  let service: StoryShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
