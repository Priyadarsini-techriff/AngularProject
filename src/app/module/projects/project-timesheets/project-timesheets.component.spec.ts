import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimesheetsComponent } from './project-timesheets.component';

describe('ProjectTimesheetsComponent', () => {
  let component: ProjectTimesheetsComponent;
  let fixture: ComponentFixture<ProjectTimesheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTimesheetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
