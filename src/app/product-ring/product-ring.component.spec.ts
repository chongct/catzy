import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRingComponent } from './product-ring.component';

describe('ProductRingComponent', () => {
  let component: ProductRingComponent;
  let fixture: ComponentFixture<ProductRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
