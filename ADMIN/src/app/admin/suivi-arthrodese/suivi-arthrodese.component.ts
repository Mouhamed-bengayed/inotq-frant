
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { PatientService } from '../Services/patient.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-suivi-arthrodese',
  templateUrl: './suivi-arthrodese.component.html',
  styleUrls: ['./suivi-arthrodese.component.css']
})
export class SuiviArthrodeseComponent implements OnInit {

  treatmentControl = new FormControl();

  checkboxControl = new FormControl(false);
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);
  checkboxControl8 = new FormControl(false);
  checkboxControl7 = new FormControl(false);
  checkboxControl9 = new FormControl(false);

  checkboxControl10 = new FormControl(false);
  checkboxControl11 = new FormControl(false);
  checkboxControl12 = new FormControl(false);
  checkboxControl13 = new FormControl(false);
  checkboxControl14 = new FormControl(false);
  checkboxControl15 = new FormControl(false);
  checkboxControl16 = new FormControl(false);
  checkboxControl17 = new FormControl(false);
  pincementN = new FormControl();
  distanceControl = new FormControl('');
  causeControl = new FormControl('');
  etageControl = new FormControl('');
  typeControl = new FormControl('');
  intensityControl = new FormControl('');
  modeControl = new FormControl('');
  evolutionControl = new FormControl('');
  responseControl = new FormControl('');
  spondylolisthesis= new FormControl('');
  pincement22 = new FormControl();
  pincement23 = new FormControl();
  pincement24 = new FormControl();

  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  constructor( private patientService: PatientService,private fb: FormBuilder) { }
  pincement27= new FormControl();
  pincement_discal= new FormControl();
  tDM_hernie_discale= new FormControl();
  sPDL= new FormControl();
  ngOnInit(): void {
  }
  
  firstFormGroup = new FormGroup({
    date_de_consultation: new FormControl(new Date()),
    age: new FormControl(''),
    addresse: new FormControl(''),
    telephone: new FormControl(''),
    profession: new FormControl(''),
    statut_social: new FormControl(''),
    entourage_actuel: new FormControl(''),
    atcd: new FormControl(''),
    tabac: new FormControl(''),
    evolution: new FormControl(''),
    evolution_nouvelles_symptomatologies: this.fb.array([]),
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
 secondFormGroup = new FormGroup({
    poids: new FormControl(''),
    taille: new FormControl(''),
    bMI: new FormControl(''),
    deformation_rachidienne: new FormControl(''),
    douleur_pression_lombairer_epineuses: new FormControl(''),
    amelioration_flexion_rachis: new FormControl(''),
    contracture_muscles_paravertebraux: new FormControl(''),
    dMS: new FormControl(''),
    sonnette: new FormControl(''),
    sonnette_Niveau: new FormControl(''),
    lasegue: new FormControl(''),
    lasegue_controlateral: new FormControl(''),
    leri: new FormControl(''),
    indice_shober: new FormControl(''),
    rOT_rotulien: new FormControl(''),
    rOT_achillien: new FormControl(''),
    rOT_perinee: new FormControl(''),

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
   
    resultat: new FormControl(''),
    hypothese_diagnostic_HD: new FormControl(''),
    hypothese_diagnostic_type: new FormControl(''),
    hypothese_diagnostic_Localisation: new FormControl(''),
    traitement_propose : new FormControl(''),
    traitement_propose_Nbre_infiltrations : new FormControl(''),
    traitement_propose_Nbre_seances: new FormControl(''),
    traitement_propose_Type_chirurgie: new FormControl(''),
    traitement_propose_Auter        : new FormControl(''),

   
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
 fourthFormGroup = new FormGroup({
   

    rx_standard: new FormControl(''),
    rx_standard_qualite: new FormControl(''),
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
    lordose_Lombaire: new FormControl(''),
    incidence_pelvienne: new FormControl(''),
    pente_sacree: new FormControl(''),
    version_perlvienne: new FormControl(''),
    rx_dynamique: new FormControl(''),
    rx_dynamique_qualite: new FormControl(''),
    rx_dynamique_Instabilite: new FormControl(''),

    tDM: new FormControl(''),
    tDM_pincement_discal: new FormControl(''),
    tDM_pincement_discal_etage: new FormControl(''),
    tDM_pincement_discal_pourcentage: new FormControl(''),
    tDM_vide_discal: new FormControl(''),
    tDM_vide_discal_etage: new FormControl(''),
    tDM_vide_discal_Pourcentage: new FormControl(''),
    tDM_hernie_discale: new FormControl(''),
    tDM_hernie_discale_type: new FormControl(''),
    tDM_hernie_discale_etage: new FormControl(''),
    tDM_sPDL: new FormControl(''),
    tDM_sPDL_etage: new FormControl(''),
    tDM_sPDL_grade: new FormControl(''),
    tDM_instabilite: new FormControl(''),
    tDM_instabilite_etage: new FormControl(''),
    tDM_apophysaire: new FormControl(''),
    tDM_apophysaire_etage: new FormControl(''),
    tDM_anomalie_transitionnelle: new FormControl(''),
    tDM_canal_lombaire_etroit: new FormControl(''),
    tDM_qualite_fusion: new FormControl(''),
    iRM: new FormControl(''),
    iRM_pincementdiscal: new FormControl(''),
    iRM_pincementdiscal_etage: new FormControl(''),
    iRM_pincementdiscal_Pourcentage: new FormControl(''),
    iRM_herniediscale: new FormControl(''),
    iRM_herniediscale_etage: new FormControl(''),
    iRM_herniediscale_Type: new FormControl(''),
    iRM_hypertrophie_jaunes : new FormControl(''),
    iRM_arthrose_apophysaire: new FormControl(''),
    iRM_arthrose_apophysaire_etage: new FormControl(''),
    iRM_canal_lombaire_etroit: new FormControl(''),
    iRM_volume_disque_hernie: new FormControl(''),
    iRM_etat_disques_sous_jacent: new FormControl(''),
    iRM_etat_disques_sus_jacent: new FormControl(''),
});
onCheckboxChange(event: any, formArrayName: string) {
  const formArray: FormArray = this.firstFormGroup.get(formArrayName) as FormArray;

  if (event.checked) {
    formArray.push(this.fb.control(event.source.value));
  } else {
    const index = formArray.controls.findIndex(x => x.value === event.source.value);
    formArray.removeAt(index);
  }
}
scorefinale:number=0;


calculateScore(): number {
  const odiFormGroupData = this.odiFormGroup.value as { [key: string]: string | null };
  let score = 0;
  for (const key in odiFormGroupData) {
    if (odiFormGroupData.hasOwnProperty(key) && odiFormGroupData[key]) {
      score += parseInt(odiFormGroupData[key]!, 10);
    }
  }
  this.scorefinale = score;
  return score;
}
saveODIAndShowScore() {
  this.saveodiForm();

  const score = this.calculateScore();
  let message = '';
  let color = '';

  // Determine the message and color based on the score range
  if (score >= 0 && score <= 20) {
    message = 'Légère incapacité';
    color = 'green'; // Green for mild disability
  } else if (score > 20 && score <= 40) {
    message = 'Incapacité modérée';
    color = 'orange'; // Orange for moderate disability
  } else if (score > 40 && score <= 60) {
    message = 'Incapacité sévère';
    color = 'red'; // Red for severe disability
  } else if (score > 60 && score <= 80) {
    message = 'Incapacité majeure';
    color = 'red'; // Red for major disability
  } else if (score > 80 && score <= 100) {
    message = 'Altération fonctionnelle';
    color = 'red'; // Red for functional impairment
  } else {
    message = 'Score invalide';
    color = 'black'; // Default color for invalid score
  }

  // Calculate the width of the color bar based on the score
  const barWidth = `${score}%`;

  // SweetAlert2 configuration with HTML and custom styling
  Swal.fire({
    title: 'ODI SCORE',
    html: `
    <div>Votre score est : ${score}</div>
    <div style="height: 10px; background-color: ${color}; width: ${barWidth}; margin-top: 10px;"></div>
 <div style="margin-top: 10px; color: ${color};">${message}</div>

  `,
    // icon: 'info',
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: 'OK'
  });
}


saveFirstForm() {
  const FirstFormGroupData1 = this.firstFormGroup.value;
    localStorage.setItem('firstFormGroupData', JSON.stringify(FirstFormGroupData1));
  
 }
 savesympFormGroup() {
  const symptomatologieFormGroupData1 = this.fourthFormGroup.value;
    localStorage.setItem('symptomatologieFormGroupData', JSON.stringify(symptomatologieFormGroupData1));
  
 }

savesecondForm() {
  const secondFormGroupData1 = this.secondFormGroup.value;
 
    localStorage.setItem('secondFormGroupData', JSON.stringify(secondFormGroupData1));
  
 }
 saveodiForm() {
  const odiFormGroupData1 = this.odiFormGroup.value;
  
    localStorage.setItem('odiFormGroupData', JSON.stringify(odiFormGroupData1));
  
 }
 saveFourthFormGroup() {
  const fourthFormGroupData1 = this.fourthFormGroup.value;
 
    localStorage.setItem('fourthFormGroupData', JSON.stringify(fourthFormGroupData1));
  
 }
 


 savesuivi() {
  this.saveFourthFormGroup();

  // Récupérer les données des formulaires depuis le localStorage
const firstFormGroupData = JSON.parse(localStorage.getItem('firstFormGroupData') || '{}');
const symptomatologieFormGroupData = JSON.parse(localStorage.getItem('symptomatologieFormGroupData') || '{}');
const secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
const odiFormGroupData = JSON.parse(localStorage.getItem('odiFormGroupData') || '{}');
const fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');


 // Fusionner les données des formulaires avec les données du patient
 const patientData = {
  ...firstFormGroupData,
  ...symptomatologieFormGroupData,
  ...secondFormGroupData,
  ...odiFormGroupData,
  ...fourthFormGroupData,
  resultatodi: this.scorefinale

};

this.patientService.createSuiviArthrodese(patientData).subscribe(
  (response) => {
    console.log("Patient enregistré avec succès : ", response);
    // Nettoyer les données des formulaires après l'enregistrement
    localStorage.removeItem('firstFormGroupData');
    localStorage.removeItem('symptomatologieFormGroupData');
    localStorage.removeItem('secondFormGroupData');
    localStorage.removeItem('fourthFormGroupData');
    localStorage.removeItem('odiFormGroupData');

  },
  (error) => {
    console.error("Erreur lors de l'enregistrement du patient : ", error);
  }
);
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

