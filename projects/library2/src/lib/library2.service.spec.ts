import { TestBed, inject } from '@angular/core/testing';

import { Library2Service } from './library2.service';

describe('Library2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Library2Service]
    });
  });

  it('should be created', inject([Library2Service], (service: Library2Service) => {
    expect(service).toBeTruthy();
  }));
});
