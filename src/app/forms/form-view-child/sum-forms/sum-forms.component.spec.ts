import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumFormsComponent } from './sum-forms.component';

describe('SumFormsComponent', () => {
  let component: SumFormsComponent;
  let fixture: ComponentFixture<SumFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
