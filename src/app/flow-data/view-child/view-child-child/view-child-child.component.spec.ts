import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildComponent } from './view-child-child.component';

describe('ViewChildChildComponent', () => {
  let component: ViewChildChildComponent;
  let fixture: ComponentFixture<ViewChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
