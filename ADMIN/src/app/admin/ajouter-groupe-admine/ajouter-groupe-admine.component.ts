import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Medecin } from '../../_models';
import Swal from 'sweetalert2';
import { MedecinService } from "../Services";
import { GroupeMedService } from "../../Service/GroupeMed.service";

@Component({
  selector: 'app-ajouter-groupe-admine',
  templateUrl: './ajouter-groupe-admine.component.html',
  styleUrls: ['./ajouter-groupe-admine.component.css']
})
export class AjouterGroupeAdmineComponent implements OnInit {
  medecins: Medecin[] = [];
  groupes: any[] = [];
  groupForm: FormGroup;
  dropdownVisible = false;

  constructor(
    private medecinService: MedecinService,
    private fb: FormBuilder,
    private groupeMedService: GroupeMedService
  ) {
    this.groupForm = this.fb.group({
      titre: [''],
      description: [''],
      medecins: this.fb.array([]), // Initialize as FormArray for multiple selections
      date: [''] // Corrected from Date to string to match the format
    });
  }

  ngOnInit(): void {
    this.getAllMedecin();
    this.getAllGroupes();
  }

  private getAllMedecin(): void {
    this.medecinService.getUserByRoles('ROLE_MEDECIN').subscribe(
      (data: Medecin[]) => {
        this.medecins = data;
        this.initializeMedecinCheckboxes(); // Initialize form controls for each medecin
      },
      (err) => console.error('Error fetching doctors:', err)
    );
  }

  initializeMedecinCheckboxes(): void {
    const formArray = this.groupForm.get('medecins') as FormArray;
    this.medecins.forEach(med => {
      formArray.push(new FormControl(false)); // Initialize each medecin with unchecked state
    });
  }

  getMedecinControl(medecin: Medecin): FormControl {
    const formArray = this.groupForm.get('medecins') as FormArray;
    return formArray.at(this.medecins.findIndex(m => m.id === medecin.id)) as FormControl;
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  isDropdownVisible(): boolean {
    return this.dropdownVisible;
  }

  onSubmit(): void {
    if (this.groupForm.valid) {
      const formValue = this.groupForm.value;
      // Format the date correctly
      formValue.date = new Date().toISOString();
      // Filter selected medecins
      const selectedMedecins = this.medecins.filter((med, index) => formValue.medecins[index]);
      formValue.medecins = selectedMedecins.map(med => med.id); // Update to store only ids
      this.groupeMedService.addGroupeMed(formValue).subscribe(
        (res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Ce groupe a été ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          });
          this.rafraichirListe();
        },
        (error) => {
          console.error('Error adding group:', error);
        }
      );
    }
  }



  private getAllGroupes(): void {
    this.groupeMedService.getAllGroupeMed().subscribe(
      (data: any[]) => {
        this.groupes = data;
      },
      (error) => {
        console.error('Error fetching groups:', error);
      }
    );
  }

  rafraichirListe() {
    this.getAllGroupes();
    this.getAllMedecin();
  }
  convertDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  showmeds(id:any) {
    this.groupeMedService.showMeds(id).subscribe(
      (data: any) => {
        Swal.fire({
          title: '<p style="color: #2e6da4">Voilà la liste des medecins de ce groupe:</p>',
          html: this.generateMedecinList(data),
          showCloseButton: true,
          showConfirmButton: false,
          width: '50%',

          customClass: {
            popup: 'large-modal'
          }
        });
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  private generateMedecinList(data: any) {
    if (!data || data.length === 0) {
      return '<p style="color:red; "><b>personne existe ici .</b></p>';
    }

    let list = '<ul>';
    data.forEach((medecin: any) => {
      list += `<li><b style="color:rgb(13,27,77);">Nom du Dr</b>: ${medecin.username}-<b style="color:rgb(13,27,77);">Adresse-mail</b>: ${medecin.email}</br>`;
    });
    list += '</ul>';

    return list;
  }
//   supprimerGroupe(groupeId: number): void {
//     this.groupeMedService.deleteGroupeMed(groupeId).subscribe(
//       () => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Ce group est supprimé avec  succès',
//           showConfirmButton: false,
//           timer: 1500
//         });
//         this.rafraichirListe();
//       },
//       (error) => {
//         console.error('Error deleting group:', error);
//       }
//     );
//   }
//   modifierGroupe(id: any) {
//     this.groupeMedService.getGroupeMedById(id).subscribe(
//       (groupe: any) => {
//         Swal.fire({
//           title:  ' <p style="color:whitesmoke;text-bold; background-color: #2e6da4;margin-top:35px">Modifier le groupe</p>',
//           html: this.generateModifyFormHtml(groupe),
//           showCloseButton: true,
//           showConfirmButton: true,
//           width: '40%',
//           confirmButtonText: `
//             modifier!
// <!--    <i class="fa fa-thumbs-up"></i> m-->
//   `,
//
//           focusConfirm: false,
//           preConfirm: () => {
//             const formValue = this.getModifyFormValues();
//             if (!formValue) {
//               Swal.showValidationMessage('Veuillez remplir tous les champs obligatoires.');
//               return false;
//             }
//             return formValue;
//           }
//         }).then((result) => {
//           if (result.isConfirmed) {
//             this.Modifier(id, result.value);
//           }
//         });
//       },
//       (error) => {
//         console.error('Error fetching group:', error);
//       }
//     );
//   }
  modifierGroupe(id: any) {
    this.groupeMedService.getGroupeMedById(id).subscribe(
      (groupe: any) => {
        Swal.fire({
          title: '<p style="color:whitesmoke; font-weight:bold; background-color: #2e6da4; margin-top:35px">Modifier le groupe</p>',
          html: this.generateModifyFormHtml(groupe),
          showCloseButton: true,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Modifier',
          cancelButtonText: 'Supprimer',
          cancelButtonColor:'#d33',
          width: '40%',
          focusConfirm: false,
          preConfirm: () => {
            const formValue = this.getModifyFormValues();
            if (!formValue) {
              Swal.showValidationMessage('Veuillez remplir tous les champs obligatoires.');
              return false;
            }
            return formValue;
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.Modifier(id, result.value);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.supprimerGroupe(id);
          }
        });
      },
      (error) => {
        console.error('Error fetching group:', error);
      }
    );
  }

  supprimerGroupe(groupeId: number): void {
    this.groupeMedService.deleteGroupeMed(groupeId).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Ce groupe est supprimé avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        this.rafraichirListe();
      },
      (error) => {
        console.error('Error deleting group:', error);
      }
    );
  }

  private generateModifyFormHtml(groupe: any) {
    return `
      <form id="modify-group-form">
        <div class="form-group">
          <label for="group-titre" style="color: rgb(103,119,239)">Modifier le nom</label>
          <input type="text" class="form-control" id="group-titre" name="titre" value="${groupe.titre}" required>
        </div>
        <div class="form-group">
          <label for="group-description" style="color: rgb(103,119,239)">Modifier la description</label>
          <input type="text" class="form-control" id="group-description" name="description" value="${groupe.description}" required>
        </div>
        <div class="form-group">
<label for="group-medecins" style="color: rgb(103,119,239)">Modifier Les Médécins</label>
  <div class="dropright">
    <button class="btn btn-facebook dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sélectionner
    </button>
    <div style="transform: translate3d(0px, 0px, 0px) !important;
  top: auto !important;
  bottom: auto !important;" class="dropdown-menu dropdown-menu-end">
      ${this.generateMedecinsCheckboxes(groupe.medecins)}
    </div>
  </div>
</div>

      </form>
    `;
  }

  private generateMedecinsCheckboxes(selectedMedecins: any[] = []): string {
    return this.medecins.map((medecin, index) => {
      const isChecked = selectedMedecins.some(selectedMed => selectedMed.id === medecin.id);
      return `
<div class="dropdown-item">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="medecin-${index}" name="medecins" value="${medecin.id}" ${isChecked ? 'checked' : ''}>
            <label class="form-check-label" for="medecin-${index}">${medecin.username}</label>
          </div>
</div>
        `;
    }).join('');
  }


  private getModifyFormValues() {
    const form = document.getElementById('modify-group-form') as HTMLFormElement;
    if (!form.checkValidity()) {
      return null;
    }

    const formData = new FormData(form);
    const formValue = {
      titre: formData.get('titre'),
      description: formData.get('description'),
      medecins: Array.from(formData.getAll('medecins')).map(id => parseInt(id as string, 10))
    };

    return formValue;
  }

  Modifier(id: any, formValue: any) {
    // formValue.date = new Date(formValue.date).toISOString(); // Convert date to ISO string
    this.groupeMedService.modifiergroup(id, formValue).subscribe(
      (data: any) => {
        console.log('Group modified:', data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La modification a été effectuée avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        this.rafraichirListe();
      },
      (error) => {
        console.error('Error modifying group:', error);
      }
    );
  }
}
