import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttaskComponent } from './currenttask.component';

describe('CurrenttaskComponent', () => {
  let component: CurrenttaskComponent;
  let fixture: ComponentFixture<CurrenttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenttaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
