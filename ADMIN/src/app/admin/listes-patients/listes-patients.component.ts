import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../Services/medecin.service';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from '../Services/patient.service';
import {AccountService} from "../../Service/account.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listes-patients',
  templateUrl: './listes-patients.component.html',
  styleUrls: ['./listes-patients.component.css']
})
export class ListesPatientsComponent implements OnInit {
  patients: Patient[] = [];
user:any;
  // activationStatus: string = "demande d'activation";

  constructor(private patientService:PatientService,private accounntservice:AccountService,private router:Router) {
    this.user= this.accounntservice.CurrentUserInfoSubject.getValue();
  }

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

   getAllPatients(){
    this.patientService.getListePatient(this.user.id).subscribe((data) => {
    this.patients = data
  console.info(data);
  },(err)=>console.error("lhnaa",err)
    );
    }
  formatDate(timestamp: any): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  consulter(id: Number | undefined) {
    this.router.navigate(['/admin/FichePatient', id]);
  }

  reload() {
    window.location.reload();
  }

  suivre(id: Number | undefined) {
    this.patientService.getPatient(id).subscribe((data) => {
      let suiviTitle = '';
      let route = '';

      if (data.traitement_propose === 'antalgique' ||
        data.traitement_propose === 'Anti inflammatoire non stéroidien' ||
        data.traitement_propose === 'corticoide' ||
        data.traitement_propose === 'infiltrations' ||
        data.traitement_propose === 'reeducation') {
        suiviTitle = 'Suivi de tttDissect';
        route = `/admin/SuivitttDissect/${id}`;
      }

      if (data.traitement_propose === 'Discectomie' ||
        data.traitement_propose === 'Arthrodèse') {
        suiviTitle = 'Suivi post-opératoire immédiat';
        route = `/admin/SuiviPostImmediat/${id}`;
      }

      if (data.traitement_propose === 'Staff') {
        suiviTitle = 'Suivi en staff';
        route = `/admin/staff/${id}`;
      }

      if (route) {
        Swal.fire({
          title: suiviTitle,
          text: "Voulez-vous vraiment accéder à cette page?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Oui, y aller!',
          cancelButtonText: 'Annuler'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate([route]);
          }
        });
      }
    });}

}
