import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesNotificationAdmineComponent } from './listes-notification-admine.component';

describe('ListesNotificationAdmineComponent', () => {
  let component: ListesNotificationAdmineComponent;
  let fixture: ComponentFixture<ListesNotificationAdmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesNotificationAdmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesNotificationAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
