import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { PatientService } from '../Services/patient.service';

@Component({
  selector: 'app-suivi-ttt-dissect',
  templateUrl: './suivi-ttt-dissect.component.html',
  styleUrls: ['./suivi-ttt-dissect.component.css']
})
export class SuiviTttDissectComponent implements OnInit {


  checkboxControl = new FormControl(false);
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);
  @ViewChild('picker1') picker1!: MatDatepicker<any>;
  constructor( private patientService: PatientService) { }

  ngOnInit(): void {
  }
  
  firstFormGroup = new FormGroup({
     date_de_consultation: new FormControl(''),
     age: new FormControl(''),
     addresse: new FormControl(''),
     telephone: new FormControl(''),
     profession: new FormControl(''),
     statut_social: new FormControl(''),
     entourage_actuel: new FormControl(''),
     atcd: new FormControl(''),
     tabac: new FormControl(''),
     evolution: new FormControl(''),
     evolution_nouvelles_symptomatologies: new FormControl(''),
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

saveFirstForm() {
  const thridFormGroupData1 = this.firstFormGroup.value;
  if (this.firstFormGroup.valid) {
    localStorage.setItem('firstFormGroupData', JSON.stringify(thridFormGroupData1));

  }
 }

savesecondForm() {
  const secondFormGroupData1 = this.secondFormGroup.value;
  if (this.secondFormGroup.valid) {
    localStorage.setItem('secondFormGroupData', JSON.stringify(secondFormGroupData1));

  }
 }
 saveFourthFormGroup() {
  const fourthFormGroupData1 = this.fourthFormGroup.value;
  if (this.secondFormGroup.valid) {
    localStorage.setItem('fourthFormGroupData', JSON.stringify(fourthFormGroupData1));
  }
 }

 savesuivi() {
  // Récupérer les données des formulaires depuis le localStorage
const firstFormGroupData = JSON.parse(localStorage.getItem('firstFormGroupData') || '{}');
const secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
const fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');

 // Fusionner les données des formulaires avec les données du patient
 const patientData = {
  ...firstFormGroupData,
  ...secondFormGroupData,
  ...fourthFormGroupData
};

this.patientService.createsuivitttDissect(patientData).subscribe(
  (response) => {
    console.log("Patient enregistré avec succès : ", response);
    // Nettoyer les données des formulaires après l'enregistrement
    localStorage.removeItem('firstFormGroupGroupData');
    localStorage.removeItem('secondFormGroupData');
    localStorage.removeItem('fourthFormGroupData');
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
