import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGroupeAdmineComponent } from './ajouter-groupe-admine.component';

describe('AjouterGroupeAdmineComponent', () => {
  let component: AjouterGroupeAdmineComponent;
  let fixture: ComponentFixture<AjouterGroupeAdmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGroupeAdmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterGroupeAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
