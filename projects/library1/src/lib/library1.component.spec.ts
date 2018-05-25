import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Library1Component } from './library1.component';

describe('Library1Component', () => {
  let component: Library1Component;
  let fixture: ComponentFixture<Library1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Library1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Library1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
