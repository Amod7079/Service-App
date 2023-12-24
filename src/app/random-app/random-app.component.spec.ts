import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAppComponent } from './random-app.component';

describe('RandomAppComponent', () => {
  let component: RandomAppComponent;
  let fixture: ComponentFixture<RandomAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
