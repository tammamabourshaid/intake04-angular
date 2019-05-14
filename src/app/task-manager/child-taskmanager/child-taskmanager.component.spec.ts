import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTaskmanagerComponent } from './child-taskmanager.component';

describe('ChildTaskmanagerComponent', () => {
  let component: ChildTaskmanagerComponent;
  let fixture: ComponentFixture<ChildTaskmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTaskmanagerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTaskmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
