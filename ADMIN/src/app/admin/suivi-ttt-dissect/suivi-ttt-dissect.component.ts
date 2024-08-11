import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { PatientService } from '../Services/patient.service';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from '../Services/account.service';
type EditableField = 'addresse' | 'descreption_Personelle' | 'lieu_deducation' | 'annee_dexperience' | 'number' | 'email' | 'sexe' | 'specialite'| 'date_de_naissance';

@Component({
  selector: 'app-suivi-ttt-dissect',
  templateUrl: './suivi-ttt-dissect.component.html',
  styleUrls: ['./suivi-ttt-dissect.component.css']
})
export class SuiviTttDissectComponent implements OnInit {
 


  treatmentControl = new FormControl();

  checkboxControl = new FormControl(false);
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);
  checkboxControl8 = new FormControl(false);
  checkboxControl7 = new FormControl(false);
  checkboxControl9 = new FormControl(false);
  checkboxControl998= new FormControl(false);
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
    this.setupBmiCalculation();
  }
  
  firstFormGroup = new FormGroup({
     dateDeConsultation: new FormControl(new Date()),
     age: new FormControl(''),
     address: new FormControl(''),
     telephone: new FormControl(''),
     profession: new FormControl(''),
     professionAutre: new FormControl(''),
     statutSocial: new FormControl(''),
     entourageActuel: new FormControl(''),
     tabac: new FormControl(''),
     evolution: new FormControl(''),
     evolutionNouvellesSymptomatologies: this.fb.array([]),
 });

 symptomatologieFormGroup = new FormGroup({
   lombalgieType: new FormControl(''),
   lombalgieIntensity: new FormControl(''),
   lombalgieMode: new FormControl(''),
   lombalgieVolution: new FormControl(''),
   lombalgieResponse: new FormControl(''),
   sciatiqueLocalisation: new FormControl(''),
   sciatiqueCote: new FormControl(''),
   sciatiqueIntensity: new FormControl(''),
   sciatiqueMode: new FormControl(''),
   sciatiqueVolution: new FormControl(''),
   sciatiqueResponse: new FormControl(''),
   cruralgieLocalisation: new FormControl(''),
   cruralgieCote: new FormControl(''),
   cruralgieIntensity: new FormControl(''),
   cruralgieMode: new FormControl(''),
   cruralgieVolution: new FormControl(''),
   cruralgieResponse: new FormControl(''),
   claudicationType: new FormControl(''),
   claudicationCote: new FormControl(''),
   derobementType: new FormControl(''),
   derobementCote: new FormControl(''),
   troubleSphincteriens: new FormControl(''),
   troubleSphincteriensUrinaire: new FormControl(''),
   pm: new FormControl(''),
   pmDistance: new FormControl(''),
   pmCauseArret: new FormControl(''),
  
});
secondFormGroup = new FormGroup({
   poids: new FormControl(''),
   taille: new FormControl(''),
   bmi: new FormControl(''),
   deformationRachidienne: new FormControl(''),
   douleurPressionLombairerEpineuses: new FormControl(''),
   ameliorationFlexionRachis: new FormControl(''),
   contractureMusclesParavertebraux: new FormControl(''),
   dms: new FormControl(''),
   sonnette: new FormControl(''),
   sonnetteNiveau: new FormControl(''),
   lasegue: new FormControl(''),
   lasegueControlateral: new FormControl(''),
   leri: new FormControl(''),
   indiceShober: new FormControl(''),
   rotRotulien: new FormControl(''),
   rotAchillien: new FormControl(''),
   rotPerinee: new FormControl(''),
   marcheTalons: new FormControl(''),
   marchePointesPieds: new FormControl(''),
   testingMusculaireL2: new FormControl(''),
   testingMusculaireL3: new FormControl(''),
   testingMusculaireL4: new FormControl(''),
   testingMusculaireL5: new FormControl(''),
   testingMusculaireS1: new FormControl(''),
   sensibiliteL2: new FormControl(''),
   sensibiliteL3: new FormControl(''),
   sensibiliteL4: new FormControl(''),
   sensibiliteL5: new FormControl(''),
   sensibiliteS1: new FormControl(''),
   examenPerineeSensibilite: new FormControl(''),
   examenPerineeTonusAnal: new FormControl(''),
   examenPerineeReflexeAnal: new FormControl(''),

 
});
hypotheseFormGroup = new FormGroup({
   hypotheseDiagnosticHD: new FormControl(''),
     hypotheseDiagnosticType: new FormControl(''),
     hypotheseDiagnosticLocalisation: new FormControl(''),
     hypotheseDiagnosticCote: new FormControl(''),
     traitementPropose: new FormControl(''),
     traitementProposeNbreInfiltrations: new FormControl(''),
     traitementProposeNbreSeances: new FormControl(''),
     traitementProposeTypeChirurgie: new FormControl(''),

});
 
 odiFormGroup = new FormGroup({
  intensiteDouleur: new FormControl(''),
  soinsPersonnels: new FormControl(''),
  levee: new FormControl(''),
  marche: new FormControl(''),
  assis: new FormControl(''),
  debout: new FormControl(''),
  sommeil: new FormControl(''),
  vieSexuelle: new FormControl(''),
  vieSociale: new FormControl(''),
  voyage: new FormControl(''),
});
 fourthFormGroup = new FormGroup({
   

   rxStandard: new FormControl(''),
     rxStandardPincement: new FormControl(''),
     rxPincementDiscalEtage: new FormControl(''),
     rxPincementDiscalPourcentage: new FormControl(''),
     rxVideDiscal: new FormControl(''),
     rxVideDiscalEtage: new FormControl(''),
     rxSPDL: new FormControl(''),
     rxSPDLEtage: new FormControl(''),
     rxSPDLGrade: new FormControl(''),
     rxAnomalieTransitionnelle: new FormControl(''),
     rxCanalLombaireEtroit: new FormControl(''),
     rxLordoseLombaire: new FormControl(''),
     rxIncidencePelvienne: new FormControl(''),
     rxPenteSacree: new FormControl(''),
     rxVersionPerlvienne: new FormControl(''),

     rxDynamique: new FormControl(''),
     rxDynamiqueQualite: new FormControl(''),
     rxDynamiqueInstabilite: new FormControl(''),

     tdm: new FormControl(''),
     tdmPincementDiscal: new FormControl(''),
     tdmPincementDiscalEtage: new FormControl(''),
     tdmPincementDiscalPourcentage: new FormControl(''),
     tdmVideDiscal: new FormControl(''),
     tdmVideDiscalEtage: new FormControl(''),
     tdmHernieDiscale: new FormControl(''),
     tdmHernieDiscaleType: new FormControl(''),
     tdmHernieDiscaleEtage: new FormControl(''),
     tdmHernieDiscaleCote: new FormControl(''),
     tdmSPDL: new FormControl(''),
     tdmSPDLEtage: new FormControl(''),
     tdmSPDLGrade: new FormControl(''),
     tdmInstabilite: new FormControl(''),
     tdmInstabiliteEtage: new FormControl(''),
     tdmApophysaire: new FormControl(''),
     tdmApophysaireEtage: new FormControl(''),
     tdmAnomalieTransitionnelle: new FormControl(''),
     tdmCanalLombaireEtroit: new FormControl(''),
     tdmQualiteFusion: new FormControl(''),

     irm: new FormControl(''),
     irmPincementDiscal: new FormControl(''),
     irmPincementDiscalEtage: new FormControl(''),
     irmPincementDiscalPourcentage: new FormControl(''),
     irmHernieDiscale: new FormControl(''),
     irmHernieDiscaleEtage: new FormControl(''),
     irmHernieDiscaleType: new FormControl(''),
     irmHernieDiscaleCote: new FormControl(''),
     irmHypertrophieJaunes: new FormControl(''),
     irmArthroseApophysaire: new FormControl(''),
     irmArthroseApophysaireEtage: new FormControl(''),
     irmCanalLombaireEtroit: new FormControl(''),
     irmVolumeDisqueHernie: new FormControl(''),
     irmEtatDisquesSousJacent: new FormControl(''),
     irmEtatDisquesSusJacent: new FormControl(''),


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
 
 savehypotheseFormGroup() {
  const hypotheseFormGroupData1 = this.hypotheseFormGroup.value;
    localStorage.setItem('hypotheseFormGroupData', JSON.stringify(hypotheseFormGroupData1));
 }
 savesympFormGroup() {
  const symptomatologieFormGroupData1 = this.symptomatologieFormGroup.value;
    localStorage.setItem('symptomatologieFormGroupData', JSON.stringify(symptomatologieFormGroupData1));
 }

savesecondForm() {
  const secondFormGroupData1 = this.secondFormGroup.value;
    localStorage.setItem('secondFormGroupData', JSON.stringify(secondFormGroupData1));  
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
const hypotheseFormGroupData = JSON.parse(localStorage.getItem('hypotheseFormGroupData') || '{}');
// const odiFormGroupData = JSON.parse(localStorage.getItem('odiFormGroupData') || '{}');

const fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');


 // Fusionner les données des formulaires avec les données du patient
 const patientData = {
  ...firstFormGroupData,
  ...symptomatologieFormGroupData,
  ...secondFormGroupData,
  ...hypotheseFormGroupData,
  ...fourthFormGroupData,
  resultat: this.scorefinale

};

this.patientService.createsuivitttDissect(patientData).subscribe(
  (response) => {
    console.log("Patient enregistré avec succès : ", response);
    // Nettoyer les données des formulaires après l'enregistrement
    localStorage.removeItem('firstFormGroupData');
    localStorage.removeItem('symptomatologieFormGroupData');
    localStorage.removeItem('secondFormGroupData');
    localStorage.removeItem('fourthFormGroupData');
    // localStorage.removeItem('odiFormGroupData');
    localStorage.removeItem('hypotheseFormGroupData');


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
setupBmiCalculation() {
  this.secondFormGroup.get('poids')?.valueChanges.subscribe(() => this.calculateBmi());
  this.secondFormGroup.get('taille')?.valueChanges.subscribe(() => this.calculateBmi());
}

calculateBmi() {
  const poids = this.secondFormGroup.get('poids')?.value as any;
  const taille = this.secondFormGroup.get('taille')?.value as any;
  if (poids && taille) {
    const heightInMeters = taille / 100;
    const bmi = poids / (heightInMeters * heightInMeters);
    this.secondFormGroup.get('bmi')?.setValue(bmi.toFixed(2));
  } else {
    this.secondFormGroup.get('bmi')?.setValue('');
  }
}


}

