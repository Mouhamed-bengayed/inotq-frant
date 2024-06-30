import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from "../../Service/account.service";
import { DomSanitizer } from '@angular/platform-browser';
import swal from 'sweetalert2';
type EditableField = 'username' | 'name' | 'addresse' | 'descreption_Personelle' | 'lieu_deducation' | 'annee_dexperience' | 'phone' | 'email' | 'sexe' | 'specialite';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  editMode: Record<EditableField, boolean> = {
    username: false,
    name: false,
    addresse: false,
    descreption_Personelle: false,
    specialite: false,
    lieu_deducation: false,
    annee_dexperience: false,
    phone: false,
    email: false,
    sexe: false
  };

  selectedFile: File | null = null;
  profileImageUrl: any = 'https://bootdey.com/img/Content/avatar/avatar1.png';

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private accountService: AccountService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.user = this.accountService.CurrentUserInfoSubject.getValue();
    this.loadProfileImage();
  }

  enableEdit(field: EditableField) {
    this.editMode[field] = true;
  }

  disableEdit(field: EditableField) {
    this.editMode[field] = false;
  }

  saveChanges() {
    const url = 'http://localhost:8082/api/user/update-user/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(url, this.user, { headers }).subscribe(
      response => {
        console.log('Changes saved:', response);
        swal.fire(
          'Succès!',
          'Vos informations ont été mises à jour avec succès!',
          'success'
        );
      },
      error => {
        console.error('Error saving changes', error);
        alert('An error occurred while saving changes.');
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.uploadPhoto(); // Automatically upload the photo once selected
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  uploadPhoto() {
    if (!this.selectedFile) {
      swal.fire('Please select a file first.', '', 'warning');
      return;
    }

    const formData = new FormData();
    formData.append('photo', this.selectedFile);

    const url = `http://localhost:8082/upload_photo_profile/${this.user.id}`;
    this.http.post(url, formData).subscribe(
      response => {
        console.log('Photo uploaded successfully:', response);
        this.loadProfileImage(); // Reload the profile image
      },
      error => {
        console.error('Error uploading photo', error);
        //alert('An error occurred while uploading the photo.');
        this.loadProfileImage(); // Reload the profile image

      }
    );
  }

  loadProfileImage() {
    const url = `http://localhost:8082/candidats/${this.user.id}/photo`;
    this.http.get(url, { responseType: 'blob' }).subscribe(
      response => {
        const objectURL = URL.createObjectURL(response);
        this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.error('Error loading profile image', error);
      }
    );
  }
}
