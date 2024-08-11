import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../Services/patient.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import {ActivatedRoute} from "@angular/router";

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
  checkboxControl9 = new FormControl(false);
  patientId: any;
  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  picker2!: MatDatepicker<any>;
  picker4!: MatDatepicker<any>;
  picker6!: MatDatepicker<any>;


  showOtherCheckboxes = false;
  antalgiqueControl = new FormControl(false);

  constructor( private patientService: PatientService,private fb: FormBuilder,private route: ActivatedRoute) { }

  firstFormGroup = new FormGroup({
     date_chirurgie: new FormControl(''),
     date_suivi: new FormControl(''),
    dissectomie_etage: new FormControl(''),
      liberation_post_etage: new FormControl(''),
      arthrodese_etage: this.fb.array([]),
      complications_per_operatoire: new FormControl(''),
      complications_per_operatoire_auter: new FormControl(''),

  });


  symptomatologieFormGroup = new FormGroup({
    lombalgie: new FormControl(''),
    sciatique: new FormControl(''),
    cruralgie: new FormControl(''),
    trouble_vesico_sphincteriens: this.fb.array([]),
    trouble_vesico_sphincteriens_Incontinence_urinaire: new FormControl(''),


  });

thridFormGroup = new FormGroup({


    testing_musculaire_l2: new FormControl(''),
    testing_musculaire_l3: new FormControl(''),
    testing_musculaire_l4: new FormControl(''),
    testing_musculaire_l5: new FormControl(''),
    testing_musculaire_s1: new FormControl(''),
    sensibilte_musculaire_l2: new FormControl(''),
    sensibilte_musculaire_l3: new FormControl(''),
    sensibilte_musculaire_l4: new FormControl(''),
    sensibilte_musculaire_l5: new FormControl(''),
    sensibilte_musculaire_s1: new FormControl(''),
    examen_perinee_sensibilite: new FormControl(''),
    examen_perinee_Tonus_anal: new FormControl(''),
    examen_perinee_Reflexe_anal : new FormControl(''),



  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');

      console.log(this.patientId);

    });
  }
  savesymptomatologieFormGroup(){
    const symptomatologieFormGroupData = this.symptomatologieFormGroup.value;
      localStorage.setItem('symptomatologieFormGroupData', JSON.stringify(symptomatologieFormGroupData));
  }
  savethridForm() {
    const thridFormGroupData = this.thridFormGroup.value;
      localStorage.setItem('thridFormGroupData', JSON.stringify(thridFormGroupData));
   }
  savesFirstFormGroup(){
    const firstFormGroupData = this.firstFormGroup.value;
      localStorage.setItem('firstFormGroup', JSON.stringify(firstFormGroupData));
  }

  addsuiviImed() {
    this.savethridForm();
       // Récupérer les données des formulaires depuis le localStorage
 const FirstFormData = JSON.parse(localStorage.getItem('firstFormGroup') || '{}');
 const symptomatologieFormGroupData = JSON.parse(localStorage.getItem('symptomatologieFormGroupData') || '{}');
 const thridFormGroupData = JSON.parse(localStorage.getItem('thridFormGroupData') || '{}');


   // Fusionner les données des formulaires avec les données du patient

   const patientData = {
    ...FirstFormData,
    ...symptomatologieFormGroupData,
    ...thridFormGroupData,


  };

      this.patientService.createsuiviImedia(patientData).subscribe(
        (response) => {
          console.log("Patient enregistré avec succès : ", response);
    localStorage.removeItem('firstFormGroup');
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
