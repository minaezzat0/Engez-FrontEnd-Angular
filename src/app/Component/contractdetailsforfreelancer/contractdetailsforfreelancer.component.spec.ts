import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractdetailsforfreelancerComponent } from './contractdetailsforfreelancer.component';

describe('ContractdetailsforfreelancerComponent', () => {
  let component: ContractdetailsforfreelancerComponent;
  let fixture: ComponentFixture<ContractdetailsforfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractdetailsforfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractdetailsforfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
