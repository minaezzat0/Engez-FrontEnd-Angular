import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFreelanceComponent } from './nav-freelance.component';

describe('NavFreelanceComponent', () => {
  let component: NavFreelanceComponent;
  let fixture: ComponentFixture<NavFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFreelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
