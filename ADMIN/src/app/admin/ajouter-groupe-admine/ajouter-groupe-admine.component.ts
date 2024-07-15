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
            title: 'Your work has been saved',
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

  supprimerGroupe(groupeId: number): void {
    this.groupeMedService.deleteGroupeMed(groupeId).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Group deleted successfully',
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
}
