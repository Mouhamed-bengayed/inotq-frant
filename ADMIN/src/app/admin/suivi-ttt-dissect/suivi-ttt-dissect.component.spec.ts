import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTttDissectComponent } from './suivi-ttt-dissect.component';

describe('SuiviTttDissectComponent', () => {
  let component: SuiviTttDissectComponent;
  let fixture: ComponentFixture<SuiviTttDissectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTttDissectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviTttDissectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
