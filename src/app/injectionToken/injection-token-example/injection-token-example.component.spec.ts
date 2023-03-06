import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokenExampleComponent } from './injection-token-example.component';

describe('InjectionTokenExampleComponent', () => {
  let component: InjectionTokenExampleComponent;
  let fixture: ComponentFixture<InjectionTokenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionTokenExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionTokenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
