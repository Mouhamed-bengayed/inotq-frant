"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjouterPatientComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CustomDateAdapter_1 = require("../Services/CustomDateAdapter");
var AjouterPatientComponent = /** @class */ (function () {
    function AjouterPatientComponent(patientService, fb) {
        this.patientService = patientService;
        this.fb = fb;
        this.countries = [
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
        this.checkboxControl = new forms_1.FormControl(false);
        this.checkboxControl1 = new forms_1.FormControl(false);
        this.checkboxControl2 = new forms_1.FormControl(false);
        this.checkboxControl3 = new forms_1.FormControl(false);
        this.checkboxControl4 = new forms_1.FormControl(false);
        this.checkboxControl5 = new forms_1.FormControl(false);
        this.checkboxControl6 = new forms_1.FormControl(false);
        this.checkboxControl7 = new forms_1.FormControl(false);
        this.checkboxControl8 = new forms_1.FormControl(false);
        this.checkboxControl9 = new forms_1.FormControl(false);
        this.checkboxControl10 = new forms_1.FormControl(false);
        this.checkboxControl11 = new forms_1.FormControl(false);
        this.checkboxControl12 = new forms_1.FormControl(false);
        this.checkboxControl13 = new forms_1.FormControl(false);
        this.checkboxControl14 = new forms_1.FormControl(false);
        this.checkboxControl15 = new forms_1.FormControl(false);
        this.checkboxControl16 = new forms_1.FormControl(false);
        this.checkboxControl17 = new forms_1.FormControl(false);
        this.distanceControl = new forms_1.FormControl('');
        this.causeControl = new forms_1.FormControl('');
        this.incontinenceControl = new forms_1.FormControl('');
        this.etageControl = new forms_1.FormControl('');
        this.typeControl = new forms_1.FormControl('');
        this.intensityControl = new forms_1.FormControl('');
        this.modeControl = new forms_1.FormControl('');
        this.evolutionControl = new forms_1.FormControl('');
        this.responseControl = new forms_1.FormControl('');
        this.pincement22 = new forms_1.FormControl();
        this.pincement23 = new forms_1.FormControl();
        this.treatmentControl = new forms_1.FormControl();
        this.radioControl = new forms_1.FormControl();
        this.showOtherCheckboxes = false;
        this.antalgiqueControl = new forms_1.FormControl(false);
        this.isLinear = false;
        this.firstFormGroup = new forms_1.FormGroup({
            date_de_consultation: new forms_1.FormControl(new Date()),
            dossierMedical: new forms_1.FormControl(''),
            n_Dossier_medical: new forms_1.FormControl(''),
            Dossier_medical_num: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            sexe: new forms_1.FormControl(''),
            annee_de_naissance: new forms_1.FormControl(''),
            origine: new forms_1.FormControl(''),
            idPatient: new forms_1.FormControl(''),
            addresse: new forms_1.FormControl(''),
            country: new forms_1.FormControl(this.countries[0].code),
            telephone: new forms_1.FormControl('', [forms_1.Validators.required, this.telephoneValidator()]),
            profession: new forms_1.FormControl(''),
            adresse_par: new forms_1.FormControl(''),
            statut_social: new forms_1.FormControl(''),
            entourage_actuel: new forms_1.FormControl(''),
            ATCD: new forms_1.FormControl(''),
            Tabac: new forms_1.FormControl(''),
            Motif_de_consultation: new forms_1.FormControl(''),
            Motif_de_consultation_l: new forms_1.FormControl('')
        });
        this.odiFormGroup = new forms_1.FormGroup({
            intensite_douleur: new forms_1.FormControl(''),
            soins_personnels: new forms_1.FormControl(''),
            levee: new forms_1.FormControl(''),
            marche: new forms_1.FormControl(''),
            assis: new forms_1.FormControl(''),
            debout: new forms_1.FormControl(''),
            sommeil: new forms_1.FormControl(''),
            vie_sexuelle: new forms_1.FormControl(''),
            vie_sociale: new forms_1.FormControl(''),
            voyage: new forms_1.FormControl('')
        });
        this.secondFormGroup = new forms_1.FormGroup({
            date_debut_maladie: new forms_1.FormControl(''),
            facture_declanchants: new forms_1.FormControl(''),
            Date_1consultation_medicale: new forms_1.FormControl(''),
            Date_1consultation_specialisee: new forms_1.FormControl(''),
            medecin_traitants: new forms_1.FormControl(''),
            traitants_anterieur: new forms_1.FormControl(''),
            Nbre_infiltration: new forms_1.FormControl(''),
            Nbre_seances: new forms_1.FormControl(''),
            evalution: new forms_1.FormControl(''),
            n_symptomatologies: new forms_1.FormControl(''),
            indication_chirurgicale: new forms_1.FormControl(''),
            date: new forms_1.FormControl('')
        });
        this.symptomatologieFormGroup = new forms_1.FormGroup({
            date_debut_maladie: new forms_1.FormControl(''),
            facture_declanchants: new forms_1.FormControl(''),
            Date_1consultation_medicale: new forms_1.FormControl(''),
            Date_1consultation_specialisee: new forms_1.FormControl(''),
            medecin_traitants: new forms_1.FormControl(''),
            traitants_anterieur: new forms_1.FormControl(''),
            Nbre_infiltration: new forms_1.FormControl(''),
            Nbre_seances: new forms_1.FormControl(''),
            evalution: new forms_1.FormControl(''),
            n_symptomatologies: new forms_1.FormControl(''),
            indication_chirurgicale: new forms_1.FormControl(''),
            date: new forms_1.FormControl(''),
            Motif_de_consultation: new forms_1.FormControl(''),
            Motif_de_consultation_l: new forms_1.FormControl('')
        });
        this.thridFormGroup = new forms_1.FormGroup({
            poids: new forms_1.FormControl(''),
            taille: new forms_1.FormControl(''),
            bMI: new forms_1.FormControl({ value: '', disabled: true }),
            deformation_rachidienne: new forms_1.FormControl(''),
            douleur_pression_lombairer_epineuses: new forms_1.FormControl(''),
            Amelioration_flexion_rachis: new forms_1.FormControl(''),
            Contracture_muscles_paravertebraux: new forms_1.FormControl(''),
            dMS: new forms_1.FormControl(''),
            sonnette: new forms_1.FormControl(''),
            sonnette_Niveau: new forms_1.FormControl(''),
            lasegue: new forms_1.FormControl(''),
            lasegue_controlateral: new forms_1.FormControl(''),
            leri: new forms_1.FormControl(''),
            indice_shober: new forms_1.FormControl(''),
            rOT_Rotulien: new forms_1.FormControl(''),
            rOT_Achillien: new forms_1.FormControl(''),
            rOT_Perinee: new forms_1.FormControl(''),
            marche_talons: new forms_1.FormControl(''),
            marche_pointes_pieds: new forms_1.FormControl(''),
            testing_musculaire_L2: new forms_1.FormControl(''),
            testing_musculaire_L3: new forms_1.FormControl(''),
            testing_musculaire_L4: new forms_1.FormControl(''),
            testing_musculaire_L5: new forms_1.FormControl(''),
            testing_musculaire_S1: new forms_1.FormControl(''),
            Sensibilte_L2: new forms_1.FormControl(''),
            Sensibilte_L3: new forms_1.FormControl(''),
            Sensibilte_L4: new forms_1.FormControl(''),
            Sensibilte_L5: new forms_1.FormControl(''),
            Sensibilte_S1: new forms_1.FormControl(''),
            examen_perinee_sensibilite: new forms_1.FormControl(''),
            examen_perinee_Tonus_anal: new forms_1.FormControl(''),
            examen_perinee_Reflexe_anal: new forms_1.FormControl(''),
            intensite_douleur: new forms_1.FormControl(''),
            soins_personnels: new forms_1.FormControl(''),
            levee: new forms_1.FormControl(''),
            marche: new forms_1.FormControl(''),
            assis: new forms_1.FormControl(''),
            debout: new forms_1.FormControl(''),
            sommeil: new forms_1.FormControl(''),
            vie_sexuelle: new forms_1.FormControl(''),
            vie_sociale: new forms_1.FormControl(''),
            voyage: new forms_1.FormControl(''),
            Hypothese_diagnostic_HD: new forms_1.FormControl(''),
            Hypothese_diagnostic_type: new forms_1.FormControl(''),
            Hypothese_diagnostic_Localisation: new forms_1.FormControl(''),
            Traitement_propose: new forms_1.FormControl(''),
            Traitement_propose_Nbre_infiltrations: new forms_1.FormControl(''),
            Traitement_propose_Nbre_seances: new forms_1.FormControl(''),
            Traitement_propose_Type_chirurgie: new forms_1.FormControl(''),
            Traitement_propose_Auter: new forms_1.FormControl('')
        });
        this.fourthFormGroup = new forms_1.FormGroup({
            rx_Standard: new forms_1.FormControl(''),
            rx_Standard_qualite: new forms_1.FormControl(''),
            pincement_discal: new forms_1.FormControl(''),
            pincement_discal_etage: new forms_1.FormControl(''),
            pincement_discal_Pourcentage: new forms_1.FormControl(''),
            vide_discal: new forms_1.FormControl(''),
            vide_discal_etage: new forms_1.FormControl(''),
            sPDL: new forms_1.FormControl(''),
            sPDL_etage: new forms_1.FormControl(''),
            sPDL_Grade: new forms_1.FormControl(''),
            anomalie_transitionnelle: new forms_1.FormControl(''),
            canal_lombaire_etroit: new forms_1.FormControl(''),
            Lordose_Lombaire: new forms_1.FormControl(''),
            incidence_pelvienne: new forms_1.FormControl(''),
            pente_sacree: new forms_1.FormControl(''),
            version_perlvienne: new forms_1.FormControl(''),
            rx_dynamique: new forms_1.FormControl(''),
            rx_dynamique_qualite: new forms_1.FormControl(''),
            rx_dynamique_Instabilite: new forms_1.FormControl(''),
            tDM: new forms_1.FormControl(''),
            tDM_Pincement_discal: new forms_1.FormControl(''),
            tDM_Pincement_discal_etage: new forms_1.FormControl(''),
            tDM_Pincement_discal_pourcentage: new forms_1.FormControl(''),
            tDM_vide_discal: new forms_1.FormControl(''),
            tDM_vide_discal_etage: new forms_1.FormControl(''),
            tDM_vide_discal_Pourcentage: new forms_1.FormControl(''),
            tDM_hernie_discale: new forms_1.FormControl(''),
            tDM_hernie_discale_type: new forms_1.FormControl(''),
            tDM_hernie_discale_etage: new forms_1.FormControl(''),
            tDM_SPDL: new forms_1.FormControl(''),
            tDM_SPDL_etage: new forms_1.FormControl(''),
            tDM_SPDL_Grade: new forms_1.FormControl(''),
            tDM_Instabilite: new forms_1.FormControl(''),
            tDM_Instabilite_etage: new forms_1.FormControl(''),
            tDM_apophysaire: new forms_1.FormControl(''),
            tDM_apophysaire_etage: new forms_1.FormControl(''),
            tDM_Anomalie_transitionnelle: new forms_1.FormControl(''),
            tDM_Canal_lombaire_etroit: new forms_1.FormControl(''),
            iRM: new forms_1.FormControl(''),
            iRM_Pincementdiscal: new forms_1.FormControl(''),
            iRM_Pincementdiscal_etage: new forms_1.FormControl(''),
            iRM_Pincementdiscal_Pourcentage: new forms_1.FormControl(''),
            iRM_Herniediscale: new forms_1.FormControl(''),
            iRM_Herniediscale_etage: new forms_1.FormControl(''),
            iRM_Herniediscale_Type: new forms_1.FormControl(''),
            iRM_Hypertrophie_jaunes: new forms_1.FormControl(''),
            iRM_Arthrose_apophysaire: new forms_1.FormControl(''),
            iRM_Arthrose_apophysaire_etage: new forms_1.FormControl(''),
            iRM_Canal_lombaire_etroit: new forms_1.FormControl(''),
            iRM_Volume_disque_hernie: new forms_1.FormControl(''),
            iRM_etat_disques_sous_jacent: new forms_1.FormControl(''),
            iRM_etat_disques_sus_jacent: new forms_1.FormControl('')
        });
        this.form = this.fb.group({
            telephone: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(/^[0-9]{10}$/) // Exemple pour un numéro de téléphone français à 10 chiffres
                ]
            ]
        });
    }
    Object.defineProperty(AjouterPatientComponent.prototype, "telephone", {
        get: function () {
            return this.form.get('telephone');
        },
        enumerable: false,
        configurable: true
    });
    AjouterPatientComponent.prototype.onCountryChange = function (countryCode) {
        var _a;
        var phoneControl = this.firstFormGroup.get('telephone');
        if (phoneControl) {
            var currentPhone = (_a = phoneControl.value) === null || _a === void 0 ? void 0 : _a.replace(/^\+\d*/, '');
            phoneControl.setValue(countryCode + currentPhone);
        }
    };
    AjouterPatientComponent.prototype.telephoneValidator = function () {
        return function (control) {
            var valid = /^\+?\d{8,15}$/.test(control.value);
            return valid ? null : { invalidPhone: true };
        };
    };
    AjouterPatientComponent.prototype.setupBmiCalculation = function () {
        var _this = this;
        var _a, _b;
        (_a = this.thridFormGroup.get('poids')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(function () { return _this.calculateBmi(); });
        (_b = this.thridFormGroup.get('taille')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(function () { return _this.calculateBmi(); });
    };
    AjouterPatientComponent.prototype.calculateBmi = function () {
        var _a, _b, _c, _d;
        var poids = (_a = this.thridFormGroup.get('poids')) === null || _a === void 0 ? void 0 : _a.value;
        var taille = (_b = this.thridFormGroup.get('taille')) === null || _b === void 0 ? void 0 : _b.value;
        if (poids && taille) {
            var heightInMeters = taille / 100;
            var bmi = poids / (heightInMeters * heightInMeters);
            (_c = this.thridFormGroup.get('bMI')) === null || _c === void 0 ? void 0 : _c.setValue(bmi.toFixed(2));
        }
        else {
            (_d = this.thridFormGroup.get('bMI')) === null || _d === void 0 ? void 0 : _d.setValue('');
        }
    };
    AjouterPatientComponent.prototype.ngOnInit = function () {
        this.onCountryChange(this.countries[0].code);
        this.setupBmiCalculation();
        this.form = this.fb.group({
            traitants_anterieur: this.fb.group({
            // You can define other controls if needed
            })
        });
        this.formA = this.fb.group({
            telephone: ['', [forms_1.Validators.required, CustomDateAdapter_1.telephoneValidator()]]
        });
    };
    AjouterPatientComponent.prototype.getTelephoneErrorMessage = function () {
        var telephoneControl = this.formA.get('telephone');
        if (!telephoneControl) {
            return ''; // or any appropriate default message
        }
        if (telephoneControl.hasError('required')) {
            return 'Le numéro de téléphone est requis.';
        }
        else if (telephoneControl.hasError('invalidTelephone')) {
            return 'Le numéro de téléphone doit commencer par +216 et contenir 9 chiffres.';
        }
        return '';
    };
    AjouterPatientComponent.prototype.onAntalgiqueChange = function (event) {
        this.showOtherCheckboxes = event.checked;
    };
    AjouterPatientComponent.prototype.addPatient = function () {
        var _this = this;
        if (this.firstFormGroup.valid) {
            var patient = this.firstFormGroup.value;
            this.patientService.createPatient(patient).subscribe(function (response) {
                console.log('Patient ajouté avec succès : ', response);
                // Réinitialiser le formulaire après l'ajout du patient
                _this.firstFormGroup.reset();
            }, function (error) {
                console.log('Erreur lors de l\'ajout du patient : ', error);
            });
        }
    };
    AjouterPatientComponent.prototype.onChange = function () {
        if (this.checkboxControl.value) {
            var statutSocialControl = this.firstFormGroup.get('statut_social');
            if (statutSocialControl) {
                statutSocialControl.enable();
            }
        }
        else {
            var statutSocialControl = this.firstFormGroup.get('statut_social');
            if (statutSocialControl) {
                statutSocialControl.disable();
                statutSocialControl.reset();
            }
        }
    };
    AjouterPatientComponent.prototype.saveSecondForm = function () {
        var SecondFormGroupData1 = this.firstFormGroup.value;
        if (this.secondFormGroup.valid) {
            localStorage.setItem('SecondFormGroupData', JSON.stringify(SecondFormGroupData1));
        }
    };
    AjouterPatientComponent.prototype.savethridForm = function () {
        var thridFormGroupData1 = this.thridFormGroup.value;
        if (this.thridFormGroup.valid) {
            localStorage.setItem('thridFormGroupData', JSON.stringify(thridFormGroupData1));
        }
    };
    AjouterPatientComponent.prototype.saveFourthFormGroup = function () {
        var fourthFormGroupData1 = this.fourthFormGroup.value;
        if (this.thridFormGroup.valid) {
            localStorage.setItem('fourthFormGroupData', JSON.stringify(fourthFormGroupData1));
        }
    };
    // Enregistrer le patient
    AjouterPatientComponent.prototype.savePatient = function () {
        // Récupérer les données des formulaires depuis le localStorage
        var thridFormGroupData = JSON.parse(localStorage.getItem('thridFormGroupData') || '{}');
        var secondFormGroupData = JSON.parse(localStorage.getItem('secondFormGroupData') || '{}');
        var fourthFormGroupData = JSON.parse(localStorage.getItem('fourthFormGroupData') || '{}');
        // Fusionner les données des formulaires avec les données du patient
        var patientData = {
            thridFormGroupData: thridFormGroupData,
            secondFormGroupData: secondFormGroupData,
            fourthFormGroupData: fourthFormGroupData
        };
        this.patientService.createPatient(patientData).subscribe(function (response) {
            console.log("Patient enregistré avec succès : ", response);
            // Nettoyer les données des formulaires après l'enregistrement
            localStorage.removeItem('terrorismeFormGroupData');
            localStorage.removeItem('secondFormGroupData');
            localStorage.removeItem('fourthFormGroupData');
        }, function (error) {
            console.error("Erreur lors de l'enregistrement du patient : ", error);
        });
    };
    __decorate([
        core_1.ViewChild('picker1')
    ], AjouterPatientComponent.prototype, "picker1");
    AjouterPatientComponent = __decorate([
        core_1.Component({
            selector: 'app-ajouter-patient',
            templateUrl: './ajouter-patient.component.html',
            styleUrls: ['./ajouter-patient.component.css']
        })
    ], AjouterPatientComponent);
    return AjouterPatientComponent;
}());
exports.AjouterPatientComponent = AjouterPatientComponent;
