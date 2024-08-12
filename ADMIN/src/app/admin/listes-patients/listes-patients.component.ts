import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  patients: any[] = [];
user:any;
  @ViewChild('searchInput') searchInput!: ElementRef;
  filteredPatients: any[] = [];

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
    this.patients = data;
        this.filteredPatients = data; // Initialize the filtered patients list

        console.info(data);
  },(err)=>console.error("lhnaa",err)
    );
    }

  convertTimestamp(timestamp: string ): { yy: string; day: string; month: string } {
    // Parse the string into a Date object
    const date = new Date(timestamp);

    // Extract the required components
    const yy = date.getUTCFullYear().toString().slice(-2); // Last two digits of the year
    const day = ("0" + date.getUTCDate()).slice(-2);       // Day of the month, padded to 2 digits
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2); // Month (0-based, so add 1), padded to 2 digits

    return { yy, day, month };
  }

// Example usa
   convertToDate(timestamp: any): Date {
    return new Date(timestamp);
  }
  formatDate(timestamp: any): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  // formatDateInYearsMonthsDays(timestamp: any): string {
  //   const now = new Date();
  //   const date = new Date(timestamp);
  //
  //   // Calculate the difference in years, months, and days
  //   let years = now.getFullYear() - date.getFullYear();
  //   let months = now.getMonth() - date.getMonth();
  //   let days = now.getDate() - date.getDate();
  //
  //   // Adjust for negative months and days
  //   if (days < 0) {
  //     months--;
  //     days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Days in the previous month
  //   }
  //
  //   if (months < 0) {
  //     years--;
  //     months += 12;
  //   }
  //
  //   // Return formatted string
  //   return `${years} years, ${months} months, ${days} days`;
  // }

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

      if (data.traitementPropose === 'antalgique' ||
        data.traitementPropose === 'Anti inflammatoire non stéroidien' ||
        data.traitementPropose === 'corticoide' ||
        data.traitementPropose === 'infiltrations' ||
        data.traitementPropose === 'reeducation') {
        suiviTitle = 'Suivi de tttDissect';
        route = `/admin/SuivitttDissect/${id}`;
      }

      if (data.traitementPropose === 'Discectomie' ||
        data.traitementPropose === 'Arthrodèse') {
        suiviTitle = 'Suivi post-opératoire immédiat';
        route = `/admin/SuiviPostImmediat/${id}`;
      }

      if (data.traitementPropose === 'Staff') {
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
  // filterPatients() {
  //   const searchTerm = this.searchInput.nativeElement.value.trim().toLowerCase();
  //   console.log('Filtering patients with search term:', searchTerm);
  //
  //   if (searchTerm) {
  //     this.filteredPatients = this.patients.filter((patient) => {
  //       return (
  //         patient.name.toLowerCase().includes(searchTerm) ||
  //         patient.username.toLowerCase().includes(searchTerm) ||
  //         patient.sexe.toLowerCase().includes(searchTerm) ||
  //         patient.addresse.toLowerCase().includes(searchTerm) ||
  //           patient.traitementPropose.toLowerCase().includes(searchTerm) ||
  //         patient.telephone.includes(searchTerm)
  //       );
  //     });
  //   } else {
  //     this.filteredPatients = this.patients;
  //   }
  // }
  filterPatients() {
    const searchTerm = this.searchInput.nativeElement.value.trim().toLowerCase();
    // console.log('Filtering patients with search term:', searchTerm);

    if (searchTerm) {
      this.filteredPatients = this.patients.filter((patient) => {
        // Basic filtering for name, username, sexe, etc.
        const basicMatch = (
          patient.name.toLowerCase().includes(searchTerm) ||
          patient.username.toLowerCase().includes(searchTerm) ||
          patient.sexe.toLowerCase().includes(searchTerm) ||
          patient.addresse.toLowerCase().includes(searchTerm) ||
          patient.traitementPropose.toLowerCase().includes(searchTerm) ||
          patient.telephone.includes(searchTerm)
        );

        // Refined filtering for 'traitementPropose' based on specific terms
        const traitementMatch = this.matchTraitementPropose(patient.traitementPropose.toLowerCase(), searchTerm);

        // Return true if either basic match or traitement match is found
        return basicMatch || traitementMatch;
      });
    } else {
      this.filteredPatients = this.patients;
    }
  }

// Helper method to match 'traitementPropose' against specific keywords
  matchTraitementPropose(traitement: string, searchTerm: string): boolean {
    console.info('Traitement:', traitement);
    console.info('Search term:', searchTerm);
    const suiviTttKeywords = ['antalgique', 'infiltrations', 'corticoide', 'reeducation', 'Anti inflammatoire non stéroidien'];
    const postOptKeywords = ['Discectomie', 'Arthrodèse'];
    const staffKeyword = 'Staff';

    if (searchTerm.includes('suivi ttt')) {
      return suiviTttKeywords.some(keyword => traitement.includes(keyword));
    } else if (searchTerm.includes('postopt')) {
      return postOptKeywords.some(keyword => traitement.includes(keyword));
    } else if (searchTerm.includes('staff')) {
      return traitement.includes(staffKeyword);
    }

    return false;
  }

}
