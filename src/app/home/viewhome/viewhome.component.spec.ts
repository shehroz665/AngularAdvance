import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhomeComponent } from './viewhome.component';

describe('ViewhomeComponent', () => {
  let component: ViewhomeComponent;
  let fixture: ComponentFixture<ViewhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewhomeComponent]
    });
    fixture = TestBed.createComponent(ViewhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
