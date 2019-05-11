import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMangerComponent } from './task-manger.component';

describe('TaskMangerComponent', () => {
  let component: TaskMangerComponent;
  let fixture: ComponentFixture<TaskMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
