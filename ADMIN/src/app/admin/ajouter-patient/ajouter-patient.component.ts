import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../Services/patient.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { telephoneValidator } from '../Services/CustomDateAdapter';
import Swal from 'sweetalert2';
import { AccountService } from 'src/app/Service/account.service';
import swal from "sweetalert2";
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css'],
  // providers: [{
  //   provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  // }]
})

export class AjouterPatientComponent implements OnInit, OnDestroy, AfterViewInit {

  // @ViewChild('stepper') private myStepper!: MatStepper  ;
  // private scrollHandler: () => void;
  isSpecialTreatmentSelected: string | null | undefined = '';

  countries = [
    { name: 'Tunisia', code: '+216' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Australia', code: '+61' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Japan', code: '+81' },
    { name: 'Brazil', code: '+55' },
    { name: 'Italy', code: '+39' },
    { name: 'Spain', code: '+34' },
    { name: 'China', code: '+86' },
    { name: 'India', code: '+91' },
    { name: 'Mexico', code: '+52' },
    { name: 'Russia', code: '+7' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Korea', code: '+82' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Argentina', code: '+54' },
  ];
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
 spondylolisthesis = new FormControl();
  treatmentControl88= new FormControl('');
 pondylolisthesis = new FormControl();
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
  pincement24 = new FormControl();
  pincement27= new FormControl();
  treatmentCont1= new FormControl('');
  pincement_discal= new FormControl();
  tDM_hernie_discale= new FormControl();
  sPDL= new FormControl();
  pincementN = new FormControl();
  treatmentControl = new FormControl();
  showNiveau = false;
  radioControl = new FormControl();
  showNiveauOptions = false;

  showOtherCheckboxes = false;
  antalgiqueControl = new FormControl(false);
  isLinear = false;
  formA!: FormGroup;
  form!: FormGroup;
  formS!: FormGroup ;
  treatmentCont!: string ;
user:any;
  private isSpecialTreatmentSelectedBool: boolean=false;

  constructor( private patientService: PatientService,private fb: FormBuilder,private accountservice:AccountService,private Router:Router) {
    this.user = this.accountservice.CurrentUserInfoSubject.getValue();
console.error("user id",this.user.id);
    this.form = this.fb.group({
      telephone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/) // Exemple pour un numéro de téléphone français à 10 chiffres
        ]
      ]
    });

    /**buttons**/
    // this.scrollHandler = this.onScroll.bind(this);

  }




  get telephone() {
    return this.form.get('telephone');
  }

  onCountryChange(countryCode: string) {
    const phoneControl = this.firstFormGroup.get('telephone');
    if (phoneControl) {
      const currentPhone = phoneControl.value?.replace(/^\+\d*/, '');
      phoneControl.setValue(countryCode + currentPhone);
    }
  }

  telephoneValidator() {
    return (control: FormControl): { [key: string]: any } | null => {
      const valid = /^\+?\d{8,15}$/.test(control.value);
      return valid ? null : { invalidPhone: true };
    };
  }
  setupBmiCalculation() {
    this.thridFormGroup.get('poids')?.valueChanges.subscribe(() => this.calculateBmi());
    this.thridFormGroup.get('taille')?.valueChanges.subscribe(() => this.calculateBmi());
  }

  calculateBmi() {
    const poids = this.thridFormGroup.get('poids')?.value as any;
    const taille = this.thridFormGroup.get('taille')?.value as any;
    if (poids && taille) {
      const heightInMeters = taille / 100;
      const bmi = poids / (heightInMeters * heightInMeters);
      this.thridFormGroup.get('bMI')?.setValue(bmi.toFixed(2));
    } else {
      this.thridFormGroup.get('bMI')?.setValue('');
    }
  }

  ngOnInit() { this.onCountryChange(this.countries[0].code);     this.setupBmiCalculation();

    this.form = this.fb.group({
      traitants_anterieur: this.fb.group({
        // You can define other controls if needed
      })
    });

    this.formA = this.fb.group({
      telephone: ['', [Validators.required, telephoneValidator(),Validators.minLength(12)]]
    });
    // window.addEventListener('scroll', this.onScroll);

  }
  ngAfterViewInit(): void {
    // // Initialize or interact with view child properties here
    // if (this.myStepper) {
    //   console.log('Stepper initialized:', this.myStepper);
    //   // Example: Go to the next step programmatically
    //   this.myStepper.next();
    // }
    // else       console.error('Stepper notfound:');
    //
    // window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    // window.removeEventListener('scroll', this.scrollHandler);
  }

  // onScroll(): void {
  //   const fixedButtons = document.querySelector('.fixe-buttons') as HTMLElement;
  //
  //   if (!fixedButtons) {
  //     console.warn('Element with class "fixed-buttons" not found');
  //     return;
  //   }
  //
  //   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   const GOLDEN_SCROLL_RATIO = 0.95; // Adjust this ratio as needed
  //
  //   if (window.scrollY / scrollableHeight > GOLDEN_SCROLL_RATIO) {
  //     fixedButtons.style.display = 'flex';
  //   } else {
  //     fixedButtons.style.display = 'none';
  //   }
  // }

  // onNextButtonClick(): void {
  //   switch (this.myStepper.selectedIndex) {
  //     case 0:
  //       this.saveFirstForm();
  //       break;
  //     case 1:
  //       this.savesymptomatologieFormGroup();
  //       break;
  //     case 2:
  //       this.savethridForm();
  //       break;
  //     case 3:
  //       this.saveODIAndShowScore();
  //       break;
  //     case 4:
  //       this.savehypoteseForm();
  //       break;
  //     case 5:
  //       this.savePatient();
  //       break;
  //     default:
  //       break;
  //   }
  //   this.myStepper.next();
  // }
  getTelephoneErrorMessage() {
    const telephoneControl = this.formA.get('telephone');
    if (!telephoneControl) {
      return ''; // or any appropriate default message
    }
    if (telephoneControl.hasError('required')) {
      return 'Le numéro de téléphone est incorrecte.';
    } else if (telephoneControl.hasError('invalidTelephone')) {
      return 'Le numéro de téléphone doit commencer par +216 et contenir 9 chiffres.';
    }
    return '';
  }

  onAntalgiqueChange(event: any) {
    this.showOtherCheckboxes = event.checked;
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
  onCheckboxChange2(event: any, formArrayName: string) {
    const formArray: FormArray = this.secondFormGroup.get(formArrayName) as FormArray;

    if (event.checked) {
      formArray.push(this.fb.control(event.source.value));
    } else {
      const index = formArray.controls.findIndex(x => x.value === event.source.value);
      formArray.removeAt(index);
    }
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
    country: new FormControl(this.countries[0].code),  // Default to the first country
    telephone: new FormControl('', [Validators.required, this.telephoneValidator()]),
     profession: new FormControl(''),
    adresse_par: new FormControl(''),
    statut_social: new FormControl(''),
    entourage_actuel: new FormControl(''),
    atcd: this.fb.array([]),
    Tabac: new FormControl(''),
    motif_de_consultation:this.fb.array([]),
    motif_de_consultation_l: this.fb.array([]),
    description_autres: new FormControl(''),

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
    resultatcalculateScore: new FormControl(''),
    description_autres: new FormControl(''),

  });
  onTreatmentChange(): void {
    const value = this.hypotheseFormGroup.get('Traitement_propose')?.value;
    this.isSpecialTreatmentSelectedBool =
      value === 'antalgique' ||
      value === 'anti_inflammatoire' ||
      value === 'corticoide' ||
      value === 'infiltrations' ||
      value === 'reeducation' ;
    // Now `isSpecialTreatmentSelected` will be true if any of the specified treatments is selected
  }
  scorefinale:number=0;


  calculateScore(): number {
    const odiFormGroupData = this.odiFormGroup.value as { [key: string]: string | null };
    let score = 0;
    let scoreReal=0;

    for (const key in odiFormGroupData) {
      if (odiFormGroupData.hasOwnProperty(key) && odiFormGroupData[key]) {
        score += parseInt(odiFormGroupData[key]!, 10);
      }
    }
    scoreReal=score*2;
    this.scorefinale = scoreReal;
    return scoreReal;
  }
  saveODIAndShowScore() {
    this.saveodiForm();

    let score = this.calculateScore();
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

    }
    else if(score>100){
      score=100;
      message = 'Altération fonctionnelle';
      color = 'red'; // Red for functional impairment
    }
    else {
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
    typeCont : new FormControl(''),

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
    // motif_de_consultation: new FormControl(''),
    // motif_de_consultation_l: new FormControl(''),

  });


  thridFormGroup = new FormGroup({
    poids: new FormControl(''),
    taille: new FormControl(''),
    bMI: new FormControl({value: '', disabled: true}),
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

isAutresChecked = false;







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

  /*addPatient() {
    if (this.firstFormGroup.valid) {
      const patient = this.firstFormGroup.value;
      this.patientService.createPatient(patient ).subscribe(
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
  }*/



  saveSecondForm() {
    const SecondFormGroupData = this.secondFormGroup.value;

      localStorage.setItem('SecondFormGroupData', JSON.stringify(SecondFormGroupData));

   }
  saveFirstForm() {
    const FirstFormData = this.firstFormGroup.value;

      localStorage.setItem('FirstFormData', JSON.stringify(FirstFormData));

  }
  savehypoteseForm() {
    const hypotheseFormGroupData = this.hypotheseFormGroup.value;

      localStorage.setItem('hypotheseFormGroupData', JSON.stringify(hypotheseFormGroupData));

  }


   saveodiForm() {
    const odiFormGroupData1 = this.odiFormGroup.value;

      localStorage.setItem('odiFormGroupData', JSON.stringify(odiFormGroupData1));

   }
  savethridForm() {
    const thridFormGroupData1 = this.thridFormGroup.value;
      localStorage.setItem('thridFormGroupData', JSON.stringify(thridFormGroupData1));


   }
   saveFourthFormGroup() {
    const fourthFormGroupData1 = this.fourthFormGroup.value;
      localStorage.setItem('fourthFormGroupData', JSON.stringify(fourthFormGroupData1));

   }
  savesymptomatologieFormGroup(){
    const symptomatologieFormGroupData = this.symptomatologieFormGroup.value;
      localStorage.setItem('symptomatologieFormGroupData', JSON.stringify(symptomatologieFormGroupData));


  }




 // Enregistrer le patient
 savePatient() {
     this.saveFourthFormGroup();

    // Récupérer les données des formulaires depuis le localStorage
 const FirstFormData = JSON.parse(localStorage.getItem('FirstFormData') || '{}');
  const secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
  const symptomatologieFormGroupData = JSON.parse(localStorage.getItem('symptomatologieFormGroupData') || '{}');
  const thridFormGroupData = JSON.parse(localStorage.getItem('thridFormGroupData') || '{}');
  const odiFormGroupData = JSON.parse(localStorage.getItem('odiFormGroupData') || '{}');
  const fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');
  const hypotheseFormGroupData = JSON.parse(localStorage.getItem('hypotheseFormGroupData') || '{}');

   // Fusionner les données des formulaires avec les données du patient

  const patientData = {
    ...hypotheseFormGroupData,

    ...FirstFormData,
    ...secondFormGroupData,
    ...symptomatologieFormGroupData,
    ...thridFormGroupData,
    ...odiFormGroupData,
    ...fourthFormGroupData,
    resultatodi: this.scorefinale,

  };
   //const user:any=localStorage.getItem("user")!

  this.patientService.createPatient(patientData,this.user.id,this.isSpecialTreatmentSelectedBool).subscribe(
    (response) => {

      // Try me!
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Fiche Patient est enregistrée !",
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.removeItem('FirstFormData');
      localStorage.removeItem('secondFormGroupData');
      localStorage.removeItem('symptomatologieFormGroupData');
      localStorage.removeItem('thridFormGroupData');
      localStorage.removeItem('odiFormGroupData');
      localStorage.removeItem('hypotheseFormGroupData');
      localStorage.removeItem('fourthFormGroupData');
    },
    (error) => {
      console.error("Erreur lors de l'enregistrement du patient : ", error);
    }
  );
}

  savePatientandQuit() {
    Swal.fire({
      icon:'warning',
      title: "Voulez-vous enregistrer cette fiche ?",
      html:'Si vous avez terminé et que vous n'+'\''+'avez pas besoin de vous occuper de la partie imagerie, cliquez sur Enregistrer',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: "enregistrer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.savePatient();

        Swal.fire(
          "Fiche Patient est enregistrée avec succéss!",
          "", "success");
        this.Router.navigate(['admin/liste/patient']);
      } else if (result.isDenied) {
        Swal.fire("Continuez votre modification", "", "info");
      }
    });
  }

  quitter() {
    Swal.fire({
      title: "Etes-vous sûr ?",
      html: " Si vous quittez, toutes les modifications seront écrasées!",
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: "Quiter",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire(
        //   "Fiche Patient est enregistrée avec succéss!",
        //   "", "success");
        this.Router.navigate(['admin/liste/patient']);
      } else if (result.isDenied) {
        Swal.fire("Continuez votre modification ", "", "info");
      }
    });
  }

  onChangePincement() {
    if (this.pincement_discal.value === 'Oui') {
      this.showNiveau = true;
    } else {
      this.showNiveau = false;
    }
  }
}















