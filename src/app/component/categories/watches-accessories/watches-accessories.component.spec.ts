import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesAccessoriesComponent } from './watches-accessories.component';

describe('WatchesAccessoriesComponent', () => {
  let component: WatchesAccessoriesComponent;
  let fixture: ComponentFixture<WatchesAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
