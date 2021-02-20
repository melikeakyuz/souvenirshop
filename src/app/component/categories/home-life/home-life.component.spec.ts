import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLifeComponent } from './home-life.component';

describe('HomeLifeComponent', () => {
  let component: HomeLifeComponent;
  let fixture: ComponentFixture<HomeLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
