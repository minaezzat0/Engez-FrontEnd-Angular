import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatOfferComponent } from './creat-offer.component';

describe('CreatOfferComponent', () => {
  let component: CreatOfferComponent;
  let fixture: ComponentFixture<CreatOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
