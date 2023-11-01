import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageFoundComponent } from './nopage-found.component';

describe('NopageFoundComponent', () => {
  let component: NopageFoundComponent;
  let fixture: ComponentFixture<NopageFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NopageFoundComponent]
    });
    fixture = TestBed.createComponent(NopageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
