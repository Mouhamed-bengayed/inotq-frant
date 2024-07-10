import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../Services/patient.service';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor( private patientService: PatientService) { }

  firstFormGroup = new FormGroup({
     date_chirurgie: new FormControl(''),
     date_suiui: new FormControl(''),

    dissectomie_etage: new FormControl(''),
      liberation_post_etage: new FormControl(''),
      arthrodese_etage: new FormControl(''),
      complications_per_operatoire: new FormControl(''),
      complications_per_operatoire_auter: new FormControl(''),
      symptomatologie_Lombalgie : new FormControl(''),
      symptomatologie_Sciatique : new FormControl(''),
      symptomatologie_Cruralgie : new FormControl(''),
      symptomatologie_sphinctériens: new FormControl(''),
     examen_Post_Testing_musculaire_l2: new FormControl(''),
     examen_Post_Testing_musculaire_l3: new FormControl(''),
     examen_Post_Testing_musculaire_l4: new FormControl(''),
     examen_Post_Testing_musculaire_l5: new FormControl(''),
     examen_Post_Testing_musculaire_s1: new FormControl(''),
     examen_Post_Sensibilte_musculaire_l2: new FormControl(''),
     examen_Post_Sensibilte_musculaire_l3: new FormControl(''),
     examen_Post_Sensibilte_musculaire_l4: new FormControl(''),
     examen_Post_Sensibilte_musculaire_l5: new FormControl(''),
     examen_Post_Sensibilte_musculaire_s1: new FormControl(''),
     examen_Post_Examen_perinee_sensibilite: new FormControl(''),
     examen_Post_Examen_perinee_Tonus_anal: new FormControl(''),
     examen_Post_Examen_perinee_Reflexe_anal: new FormControl(''),
  });
  
  hypotheseFormGroup = new FormGroup({
    Nbre_infiltration: new FormControl(''),
    Nbre_seances: new FormControl(''),
    description_autres: new FormControl(''),
    Hypothese_diagnostic_HD: new FormControl(''),
    Hypothese_diagnostic_type: new FormControl(''),
    Hypothese_diagnostic_Localisation: new FormControl(''),
    Traitement_propose : new FormControl(''),
    Traitement_propose_Nbre_infiltrations : new FormControl(''),
    Traitement_propose_Nbre_seances: new FormControl(''),
    Traitement_propose_Type_chirurgie: new FormControl(''),
    Traitement_propose_Auter: new FormControl(''),
  });
  symptomatologieFormGroup = new FormGroup({
    date_debut_maladie: new FormControl(''),
    facture_declanchants: new FormControl(''),
    Date_1consultation_medicale: new FormControl(''),
    Date_1consultation_specialisee: new FormControl(''),
    medecin_traitants: new FormControl(''),
    traitants_anterieur: new FormControl(''),
    Nbre_infiltration: new FormControl(''),
    Nbre_seances: new FormControl(''),
    evalution: new FormControl(''),
    n_symptomatologies: new FormControl(''),
    indication_chirurgicale: new FormControl(''),
    date: new FormControl(''),
    Motif_de_consultation: new FormControl(''),
    Motif_de_consultation_l: new FormControl(''),



   
   
    marche_talons: new FormControl(''),
    marche_pointes_pieds: new FormControl(''),
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
  addsuiviImed() {
    if (this.firstFormGroup.valid) {
      const patient = this.firstFormGroup.value;
      this.patientService.createsuiviImedia(patient).subscribe(
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
  

}
