import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviArthrodeseComponent } from './suivi-arthrodese.component';

describe('SuiviArthrodeseComponent', () => {
  let component: SuiviArthrodeseComponent;
  let fixture: ComponentFixture<SuiviArthrodeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviArthrodeseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviArthrodeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
