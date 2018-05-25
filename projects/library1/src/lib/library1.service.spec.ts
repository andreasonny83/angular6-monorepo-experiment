import { TestBed, inject } from '@angular/core/testing';

import { Library1Service } from './library1.service';

describe('Library1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Library1Service]
    });
  });

  it('should be created', inject([Library1Service], (service: Library1Service) => {
    expect(service).toBeTruthy();
  }));
});
