import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  patientId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');
      this.loadPatientProfile();
    });
  }

  loadPatientProfile(): void {
    if (this.patientId) {
      // Call your service to get the patient data using the patientId
      // Example: this.patientService.getPatientById(this.patientId).subscribe(...);
    }
  }
  patient = {
    name: 'Louay Sghaier',
    sexe: 'Homme',
    age: '25 ans',
    adresse: '12 rue de la paix'
  };
}
