import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { PatientService } from '../Services/patient.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  checkboxControl = new FormControl(false);
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);
  checkboxControl5 = new FormControl(false);
  checkboxControl7 = new FormControl(false);
  checkboxControl13 = new FormControl(false);



  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  constructor( private patientService: PatientService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  firstFormGroup = new FormGroup({
    date: new FormControl(''),
      diagnostic_preop: new FormControl(''),
      indication_Antalgique: new FormControl(''),
      indication_Infiltrations_Nbreinfiltrations : new FormControl(''),
      indication_Reeducation_Nbreseances: new FormControl(''),
      indication_Dissectomie_etage: new FormControl(''),
      indication_Liberation_etage: new FormControl(''),
      indication_Arthrodese: this.fb.array([]),
      conclusion: new FormControl(''),
  });

  addSuiviStafff() {
    if (this.firstFormGroup.valid) {
      const patient = this.firstFormGroup.value;
      this.patientService.createSuiviStafff(patient).subscribe(
        (response) => {
          console.log('Patient ajouté avec succès : ', response);
          // Réinitialiser le formulaire après l'ajout du patient
          this.firstFormGroup.reset();
        },
        (error) => {
          console.log('Erreur lors de l\'ajout du patient : ', error);
        }
      );
    }
  }

  
 onChange() {
  if (this.checkboxControl.value) {
    const statutSocialControl = this.firstFormGroup.get('statut_social');
    if (statutSocialControl) {
      statutSocialControl.enable();
    }
  } else {
    const statutSocialControl = this.firstFormGroup.get('statut_social');
    if (statutSocialControl) {
      statutSocialControl.disable();
      statutSocialControl.reset();
    }
  }
  
}
onCheckboxChange(event: any, formArrayName: string) {
  const formArray: FormArray = this.firstFormGroup.get(formArrayName) as FormArray;

  if (event.checked) {
    formArray.push(this.fb.control(event.source.value));
  } else {
    const index = formArray.controls.findIndex(x => x.value === event.source.value);
    formArray.removeAt(index);
  }
}

}
