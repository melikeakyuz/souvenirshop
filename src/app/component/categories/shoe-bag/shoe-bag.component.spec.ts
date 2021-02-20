import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeBagComponent } from './shoe-bag.component';

describe('ShoeBagComponent', () => {
  let component: ShoeBagComponent;
  let fixture: ComponentFixture<ShoeBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
