import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductprocessComponent } from './productprocess.component';

describe('ProductprocessComponent', () => {
  let component: ProductprocessComponent;
  let fixture: ComponentFixture<ProductprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
