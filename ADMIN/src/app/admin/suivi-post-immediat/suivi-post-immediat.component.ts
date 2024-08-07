import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../Services/patient.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-suivi-post-immediat',
  templateUrl: './suivi-post-immediat.component.html',
  styleUrls: ['./suivi-post-immediat.component.css']
})
export class SuiviPostImmediatComponent implements OnInit {

  checkboxControl = new FormControl(false);
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);
  checkboxControl5 = new FormControl(false);
  checkboxControl6 = new FormControl(false);
  checkboxControl7 = new FormControl(false);
  checkboxControl8 = new FormControl(false);
  checkboxControl15 = new FormControl(false);
  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  picker2!: MatDatepicker<any>;
  picker4!: MatDatepicker<any>;
  picker6!: MatDatepicker<any>;


  showOtherCheckboxes = false;
  antalgiqueControl = new FormControl(false);

  constructor( private patientService: PatientService,private fb: FormBuilder) { }

  firstFormGroup = new FormGroup({
     date_chirurgie: new FormControl(''),
     date_suiui: new FormControl(''),

    dissectomie_etage: new FormControl(''),
      liberation_post_etage: new FormControl(''),
      arthrodese_etage: new FormControl(''),
      complications_per_operatoire: new FormControl(''),
      complications_per_operatoire_auter: new FormControl(''),
    
  });
  
 
  symptomatologieFormGroup = new FormGroup({
    dissectomi: new FormControl(''),
    liberation_post: new FormControl(''),
    arthrodese: new FormControl(''),
    trouble_vesico_sphincteriens: new FormControl(''),
    trouble_vesico_sphincteriens_Incontinence_urinaire: new FormControl(''),



   
   
   
  });

thridFormGroup = new FormGroup({
    
   
    testing_musculaire_L2: new FormControl(''),
    testing_musculaire_L3: new FormControl(''),
    testing_musculaire_L4: new FormControl(''),
    testing_musculaire_L5: new FormControl(''),
    testing_musculaire_S1: new FormControl(''),
    sensibilte_L2: new FormControl(''),
    sensibilte_L3: new FormControl(''),
    sensibilte_L4: new FormControl(''),
    sensibilte_L5: new FormControl(''),
    sensibilte_S1: new FormControl(''),
    examen_perinee_sensibilite: new FormControl(''),
    examen_perinee_Tonus_anal: new FormControl(''),
    examen_perinee_Reflexe_anal : new FormControl(''),
    intensite_douleur: new FormControl(''),
    soins_personnels: new FormControl(''),
    levee: new FormControl(''),
    marche: new FormControl(''),
    assis: new FormControl(''),
    debout: new FormControl(''),
    sommeil: new FormControl(''),
    vie_sexuelle: new FormControl(''),
    vie_sociale: new FormControl(''),
    voyage: new FormControl(''),
   

  });
  ngOnInit(): void {
  }
  savesymptomatologieFormGroup(){
    const symptomatologieFormGroupData = this.symptomatologieFormGroup.value;
      localStorage.setItem('symptomatologieFormGroupData', JSON.stringify(symptomatologieFormGroupData));
  }
  savethridForm() {
    const thridFormGroupData1 = this.thridFormGroup.value;
      localStorage.setItem('thridFormGroupData', JSON.stringify(thridFormGroupData1));
   }
  savesFirstFormGroup(){
    const firstFormGroupData = this.firstFormGroup.value;
      localStorage.setItem('firstFormGroup', JSON.stringify(firstFormGroupData));
  }

  addsuiviImed() {
       // Récupérer les données des formulaires depuis le localStorage
 const FirstFormData = JSON.parse(localStorage.getItem('FirstFormData') || '{}');
 const secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
 const symptomatologieFormGroupData = JSON.parse(localStorage.getItem('symptomatologieFormGroupData') || '{}');

 
   // Fusionner les données des formulaires avec les données du patient

   const patientData = {
    ...FirstFormData,
    ...secondFormGroupData,
    ...symptomatologieFormGroupData,

  };
  
      this.patientService.createsuiviImedia(patientData).subscribe(
        (response) => {
          console.log("Patient enregistré avec succès : ", response);
    localStorage.removeItem('FirstFormData');
    localStorage.removeItem('symptomatologieFormGroupData');
    localStorage.removeItem('thridFormGroupData');
        },
        (error) => {
          console.log('Erreur lors de l\'ajout du patient : ', error);
        }
      );
    
  }
  user:any;




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
