import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAdmineComponent } from './notification-admine.component';

describe('NotificationAdmineComponent', () => {
  let component: NotificationAdmineComponent;
  let fixture: ComponentFixture<NotificationAdmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationAdmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
