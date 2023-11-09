import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiformsComponent } from './multiforms.component';

describe('MultiformsComponent', () => {
  let component: MultiformsComponent;
  let fixture: ComponentFixture<MultiformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiformsComponent]
    });
    fixture = TestBed.createComponent(MultiformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
