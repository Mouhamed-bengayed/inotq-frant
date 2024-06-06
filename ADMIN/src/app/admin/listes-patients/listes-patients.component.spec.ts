import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesPatientsComponent } from './listes-patients.component';

describe('ListesPatientsComponent', () => {
  let component: ListesPatientsComponent;
  let fixture: ComponentFixture<ListesPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
