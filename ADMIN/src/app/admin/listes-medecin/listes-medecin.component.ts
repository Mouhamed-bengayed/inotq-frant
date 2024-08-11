import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../Services/medecin.service';
import { Medecin } from 'src/app/_models';

@Component({
  selector: 'app-listes-medecin',
  templateUrl: './listes-medecin.component.html',
  styleUrls: ['./listes-medecin.component.css']
})

export class ListesMedecinComponent implements OnInit {

  medecins: Medecin[] = [];

  constructor(private medecinService :MedecinService) {
    this.medecinService=medecinService;
   }
  formatDate(timestamp: any): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  ngOnInit(): void {
    this.getAllMedecin();
  }

  private getAllMedecin(){
    this.medecinService.getUserByRoles('ROLE_MEDECIN').subscribe((data) => {
    this.medecins = data
  console.info(data);
  },
 (err)=>console.error("lhnaa",err)
    );
    }
    activateMedecin(medecin: Medecin): void {
      this.medecinService.activateMedecin(medecin.id).subscribe(
        () => {
          console.log('Utilisateur activé avec succès.');
          window.location.reload();
          medecin.Status=true;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'activation :', error);
        }
      );
    }

    bloqueMedecinByAdmin(medecin: Medecin): void {
    if(medecin.validtologin){
      this.medecinService.bloquerMedecin(medecin.id).subscribe(
        () => {
        console.log('Utilisateur activé avec succès.');
          window.location.reload();
          //  medecin.blockedByAdmin=false;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'activation :', error);
        }
      );}
    }
    ActiveMedecinByAdmin(medecin: Medecin): void {
      this.medecinService.activateMedecin(medecin.id).subscribe(
        () => {
        console.log('Utilisateur activé avec succès.');
          window.location.reload();
          // medecin.blockedByAdmin=true;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'activation :', error);
        }
      );
    }

    supprimeMedecin(medecin: Medecin): void {
      this.medecinService.supprimerMedecin(medecin.id).subscribe(
        () => {
        console.log('Utilisateur Supprime avec succès.');
          window.location.reload();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'activation :', error);
        }
      );
    }


  ReactivateCeMedecin(med: Medecin) {
    this.medecinService.ReactivateCeMedecin(med.id).subscribe(
      () => {
        console.log('Utilisateur Supprime avec succès.');
        window.location.reload();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'activation :', error);
      }
    );
  }

  DebloquerMedecin(med: Medecin) {
    if(med.validtologin){
    this.medecinService.DebloquerMedecin(med.id).subscribe(
      () => {
        console.log('Utilisateur Supprime avec succès.');
        window.location.reload();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'activation :', error);
      }
    );}
  }

  reload() {
    window.location.reload();
  }

  formatDateInYearsMonthsDays(date: string) {
    return "";
  }
}


