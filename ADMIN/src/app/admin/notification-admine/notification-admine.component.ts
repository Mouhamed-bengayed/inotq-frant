import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MedecinService } from '../Services/medecin.service';
import { HttpClient } from '@angular/common/http';
import {Medecin} from "../../_models";
import {GroupeMedService} from "../../Service/GroupeMed.service";
import {NotificationService} from "../../Service/Notification.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-notification-admine',
  templateUrl: './notification-admine.component.html',
  styleUrls: ['./notification-admine.component.css']
})
export class NotificationAdmineComponent implements OnInit {
  medecins: any[] = [];
  groupForm: FormGroup;
  dropdownVisible = false;
  selectedFile: File | null = null; // Track selected file

  constructor(
    private fb: FormBuilder,
    private medecinService: MedecinService,
    private NotificationService:NotificationService,
    private http: HttpClient,
    private GroupemedecinService:GroupeMedService
  ) {
    this.groupForm = this.fb.group({
      title: [''],
      description: [''],
      date: [''],
      reminder: [''],
      medecins: this.fb.array([]),
      // file: [''] // Add a form control for file
    });
  }

  ngOnInit(): void {
    this.getallgroupmeds();
  }

  private getallgroupmeds(): void {
    this.GroupemedecinService.getAllGroupeMed().subscribe(
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
  getMedecinControl(medecin: any): FormControl {
    const formArray = this.groupForm.get('medecins') as FormArray;
    return formArray.at(this.medecins.findIndex(m => m.id === medecin.id)) as FormControl;
  }

  // Toggle dropdown for medecin selection
  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  // Check if dropdown is visible
  isDropdownVisible(): boolean {
    return this.dropdownVisible;
  }

  // Handle file selection
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.groupForm.patchValue({
        file: this.selectedFile
      });
    }
  }

  // Submit form
  onSubmit(): void {
    // const formData:FormGroup = new FormGroup();
    // formData.append('title', this.groupForm.get('title')!.value);
    // formData.append('message', this.groupForm.get('description')!.value);
    // formData.append('date', this.groupForm.get('date')!.value);
    // formData.append('rappel', this.groupForm.get('reminder')!.value);
    // // formData.append('file', this.selectedFile!); // Append selected file to form data

    // Append selected doctors (medecins)
    // const medecinsFormArray = this.groupForm.get('medecins') as FormArray;
    // for (let i = 0; i < medecinsFormArray.length; i++) {
    //   if (medecinsFormArray.at(i).value) {
    //     formData.append('medecins', this.medecins[i].id.toString());
    //   }
    // }
    const selectedMedecinIds = this.groupForm.value.medecins
      .map((checked: boolean, i: number) => checked ? this.medecins[i].id : null)
      .filter((id: number | null) => id !== null);

    const payload = {
      ...this.groupForm.value,
      medecins: selectedMedecinIds
    };
    // Example: Submit formData to backend API using HttpClient
    this.NotificationService.createNotification(payload).subscribe(
      (response) => {
        console.log('Notification submitted successfully:', response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La notification a été envoyée avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        // Optionally reset form or navigate to another page
      },
      (error) => {
        console.error('Error submitting notification:', error);
      }
    );
  }


}
