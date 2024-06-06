import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../Services/medecin.service';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from '../Services/patient.service';

@Component({
  selector: 'app-listes-patients',
  templateUrl: './listes-patients.component.html',
  styleUrls: ['./listes-patients.component.css']
})
export class ListesPatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  suprimerPatient(patient: Patient): void {
    if (patient.id !== undefined) {
      this.patientService.supprimerPatient(patient.id).subscribe(
        () => {
          window.location.reload();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'activation :', error);
        }
      );
    } else {
      console.error('ID du patient non défini');
    }
  }
  
  private getAllPatients(){
    this.patientService.getListePatient().subscribe((data) => {
    this.patients = data
  console.info(data);
  },(err)=>console.error("lhnaa",err)
    );
    }

}
