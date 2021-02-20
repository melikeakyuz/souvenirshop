import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprocessComponent } from './customerprocess.component';

describe('CustomerprocessComponent', () => {
  let component: CustomerprocessComponent;
  let fixture: ComponentFixture<CustomerprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
