import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Library2Component } from './library2.component';

describe('Library2Component', () => {
  let component: Library2Component;
  let fixture: ComponentFixture<Library2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Library2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Library2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
