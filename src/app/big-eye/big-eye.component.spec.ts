import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigEyeComponent } from './big-eye.component';

describe('BigEyeComponent', () => {
  let component: BigEyeComponent;
  let fixture: ComponentFixture<BigEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
