import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListingComponent } from './cats-listing.component';

describe('CatsListingComponent', () => {
  let component: CatsListingComponent;
  let fixture: ComponentFixture<CatsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatsListingComponent]
    });
    fixture = TestBed.createComponent(CatsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
