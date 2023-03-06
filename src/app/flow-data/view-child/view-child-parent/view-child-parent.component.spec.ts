import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildParentComponent } from './view-child-parent.component';

describe('ViewChildParentComponent', () => {
  let component: ViewChildParentComponent;
  let fixture: ComponentFixture<ViewChildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
