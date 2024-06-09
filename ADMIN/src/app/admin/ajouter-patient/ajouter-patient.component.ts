import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../Services/patient.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { telephoneValidator } from '../Services/CustomDateAdapter';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css']
})

export class AjouterPatientComponent implements OnInit {
  
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
  checkboxControl10 = new FormControl(false);
  checkboxControl11 = new FormControl(false);
  checkboxControl12 = new FormControl(false);
  checkboxControl13 = new FormControl(false);
  checkboxControl14 = new FormControl(false);
  checkboxControl15 = new FormControl(false);
  checkboxControl16 = new FormControl(false);
  checkboxControl17 = new FormControl(false);


  distanceControl = new FormControl('');
  causeControl = new FormControl('');
  incontinenceControl = new FormControl('');

  etageControl = new FormControl('');
  typeControl = new FormControl('');
  intensityControl = new FormControl('');
  modeControl = new FormControl('');
  evolutionControl = new FormControl('');
  responseControl = new FormControl('');
  treatmentC = new FormControl();
  pincement22 = new FormControl();
  pincement23 = new FormControl();
  pincementN = new FormControl();
  treatmentControl = new FormControl();
  showNiveau = false;
  radioControl = new FormControl();
  showNiveauOptions = false;
  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  picker2!: MatDatepicker<any>;
  showOtherCheckboxes = false;
  antalgiqueControl = new FormControl(false);
  isLinear = false;
  formA!: FormGroup;
  form!: FormGroup;
  formS!: FormGroup ;

  constructor( private patientService: PatientService,private fb: FormBuilder) {
    this.form = this.fb.group({
      telephone: [
        '', 
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/) // Exemple pour un numéro de téléphone français à 10 chiffres
        ]
      ]
    });
  }

  get telephone() {
    return this.form.get('telephone');
  }
  

  
  ngOnInit() {
    this.form = this.fb.group({
      traitants_anterieur: this.fb.group({
        // You can define other controls if needed
      })
    });

    this.formA = this.fb.group({
      telephone: ['', [Validators.required, telephoneValidator()]]
    });

 
  
  }

  getTelephoneErrorMessage() {
    const telephoneControl = this.formA.get('telephone');
    if (!telephoneControl) {
      return ''; // or any appropriate default message
    }
    if (telephoneControl.hasError('required')) {
      return 'Le numéro de téléphone est requis.';
    } else if (telephoneControl.hasError('invalidTelephone')) {
      return 'Le numéro de téléphone doit commencer par +216 et contenir 9 chiffres.';
    }
    return '';
  }

  onAntalgiqueChange(event: any) {
    this.showOtherCheckboxes = event.checked;
  }
 
  firstFormGroup = new FormGroup({
    date_de_consultation: new FormControl(new Date()),
    dossierMedical: new FormControl(''),  
    n_Dossier_medical: new FormControl(''),
    Dossier_medical_num: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    sexe: new FormControl(''),
    annee_de_naissance: new FormControl(''),
    origine: new FormControl(''),
    idPatient: new FormControl(''),
    addresse: new FormControl(''),
    telephone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    profession: new FormControl(''),
    adresse_par: new FormControl(''),
    statut_social: new FormControl(''),
    entourage_actuel: new FormControl(''),
    atcd: new FormControl(''),
    Tabac: new FormControl(''),
    Motif_de_consultation: new FormControl(''),     
    Motif_de_consultation_l: new FormControl(''),
  });


  odiFormGroup = new FormGroup({
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

  
  secondFormGroup = new FormGroup({
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
    
  });


  thridFormGroup = new FormGroup({
    poids: new FormControl(''),
    taille: new FormControl(''),
    bMI: new FormControl(''),
    deformation_rachidienne: new FormControl(''),
    douleur_pression_lombairer_epineuses: new FormControl(''),
    Amelioration_flexion_rachis: new FormControl(''),
    Contracture_muscles_paravertebraux: new FormControl(''),
    dMS: new FormControl(''),
    sonnette: new FormControl(''),
    sonnette_Niveau: new FormControl(''),
    lasegue: new FormControl(''),
    lasegue_controlateral: new FormControl(''),
    leri: new FormControl(''),
    indice_shober: new FormControl(''),
    rOT_Rotulien: new FormControl(''),
    rOT_Achillien: new FormControl(''),
    rOT_Perinee: new FormControl(''),
    marche_talons: new FormControl(''),
    marche_pointes_pieds: new FormControl(''),
    testing_musculaire_L2: new FormControl(''),
    testing_musculaire_L3: new FormControl(''),
    testing_musculaire_L4: new FormControl(''),
    testing_musculaire_L5: new FormControl(''),
    testing_musculaire_S1: new FormControl(''),
    Sensibilte_L2: new FormControl(''),
    Sensibilte_L3: new FormControl(''),
    Sensibilte_L4: new FormControl(''),
    Sensibilte_L5: new FormControl(''),
    Sensibilte_S1: new FormControl(''),
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
    Hypothese_diagnostic_HD: new FormControl(''),
    Hypothese_diagnostic_type: new FormControl(''),
    Hypothese_diagnostic_Localisation: new FormControl(''),
    Traitement_propose : new FormControl(''),
    Traitement_propose_Nbre_infiltrations : new FormControl(''),
    Traitement_propose_Nbre_seances: new FormControl(''),
    Traitement_propose_Type_chirurgie: new FormControl(''),
    Traitement_propose_Auter: new FormControl(''),

    
  });

  fourthFormGroup = new FormGroup({
    checkboxControl7 : new FormControl(''),


    rx_Standard: new FormControl(''),
    rx_Standard_qualite: new FormControl(''),
    pincement_discal: new FormControl(''),
    pincement_discal_etage: new FormControl(''),
    pincement_discal_Pourcentage: new FormControl(''),
    vide_discal: new FormControl(''),
    vide_discal_etage: new FormControl(''),
    sPDL: new FormControl(''),
    sPDL_etage: new FormControl(''),
    sPDL_Grade: new FormControl(''),
    anomalie_transitionnelle: new FormControl(''),
    canal_lombaire_etroit: new FormControl(''),
    Lordose_Lombaire: new FormControl(''),
    incidence_pelvienne: new FormControl(''),
    pente_sacree: new FormControl(''),
    version_perlvienne: new FormControl(''),
    rx_dynamique: new FormControl(''),
    rx_dynamique_qualite: new FormControl(''),
    rx_dynamique_Instabilite: new FormControl(''),

    tDM: new FormControl(''),
    tDM_Pincement_discal: new FormControl(''),
    tDM_Pincement_discal_etage: new FormControl(''),
    tDM_Pincement_discal_pourcentage: new FormControl(''),
    tDM_vide_discal: new FormControl(''),
    tDM_vide_discal_etage: new FormControl(''),
    tDM_vide_discal_Pourcentage: new FormControl(''),
    tDM_hernie_discale: new FormControl(''),
    tDM_hernie_discale_type: new FormControl(''),
    tDM_hernie_discale_etage: new FormControl(''),
    tDM_SPDL: new FormControl(''),
    tDM_SPDL_etage: new FormControl(''),
    tDM_SPDL_Grade: new FormControl(''),
    tDM_Instabilite: new FormControl(''),
    tDM_Instabilite_etage: new FormControl(''),
    tDM_apophysaire: new FormControl(''),
    tDM_apophysaire_etage: new FormControl(''),
    tDM_Anomalie_transitionnelle: new FormControl(''),
    tDM_Canal_lombaire_etroit: new FormControl(''),

    iRM: new FormControl(''),
    iRM_Pincementdiscal: new FormControl(''),
    iRM_Pincementdiscal_etage: new FormControl(''),
    iRM_Pincementdiscal_Pourcentage: new FormControl(''),
    iRM_Herniediscale: new FormControl(''),
    iRM_Herniediscale_etage: new FormControl(''),
    iRM_Herniediscale_Type: new FormControl(''),
    iRM_Hypertrophie_jaunes : new FormControl(''),
    iRM_Arthrose_apophysaire: new FormControl(''),
    iRM_Arthrose_apophysaire_etage: new FormControl(''),
    iRM_Canal_lombaire_etroit: new FormControl(''),
    iRM_Volume_disque_hernie: new FormControl(''),
    iRM_etat_disques_sous_jacent: new FormControl(''),
    iRM_etat_disques_sus_jacent: new FormControl(''),
});




  




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

  addPatient() {
    if (this.firstFormGroup.valid) {
      const patient = this.firstFormGroup.value;
      this.patientService.createPatient(patient).subscribe(
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




  saveSecondForm() {
    const SecondFormGroupData1 = this.secondFormGroup.value;
    if (this.secondFormGroup.valid) {
      localStorage.setItem('SecondFormGroupData', JSON.stringify(SecondFormGroupData1));
    }
   }

   saveodiForm() {
    const odiFormGroupData1 = this.odiFormGroup.value;
    if (this.odiFormGroup.valid) {
      localStorage.setItem('odiFormGroupData', JSON.stringify(odiFormGroupData1));
    }
   }
  savethridForm() {
    const thridFormGroupData1 = this.thridFormGroup.value;
    if (this.thridFormGroup.valid) {
      localStorage.setItem('thridFormGroupData', JSON.stringify(thridFormGroupData1));

    }
   }
   saveFourthFormGroup() {
    const fourthFormGroupData1 = this.fourthFormGroup.value;
    if (this.thridFormGroup.valid) {
      localStorage.setItem('fourthFormGroupData', JSON.stringify(fourthFormGroupData1));
    }
   }
 

 // Enregistrer le patient
 savePatient() {
    // Récupérer les données des formulaires depuis le localStorage
  const secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
  const symptomatologieFormGroupData = JSON.parse(localStorage.getItem('symptomatologieFormGroupData') || '{}');
  const thridFormGroupData = JSON.parse(localStorage.getItem('thridFormGroupData') || '{}');
  const odiFormGroupData = JSON.parse(localStorage.getItem('odiFormGroupData') || '{}');
  const fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');

   // Fusionner les données des formulaires avec les données du patient
 
  const patientData = {
    ...secondFormGroupData,
    ...symptomatologieFormGroupData,
    ...thridFormGroupData,
    ...odiFormGroupData,
    ...fourthFormGroupData,
  
  
  };

  this.patientService.createPatient(patientData).subscribe(
    (response) => {

      console.log("Patient enregistré avec succès : ", response);
      localStorage.removeItem('secondFormGroupData');
      localStorage.removeItem('symptomatologieFormGroupData');
      localStorage.removeItem('thridFormGroupData');
      localStorage.removeItem('odiFormGroupData');
      localStorage.removeItem('fourthFormGroupData');

    },
    (error) => {
      console.error("Erreur lors de l'enregistrement du patient : ", error);
    }
  );
}

}
  
    


  

  

        
      
 




