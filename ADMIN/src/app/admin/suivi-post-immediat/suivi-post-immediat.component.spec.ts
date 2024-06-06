import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPostImmediatComponent } from './suivi-post-immediat.component';

describe('SuiviPostImmediatComponent', () => {
  let component: SuiviPostImmediatComponent;
  let fixture: ComponentFixture<SuiviPostImmediatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPostImmediatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviPostImmediatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
