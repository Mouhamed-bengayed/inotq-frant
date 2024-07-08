import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {fichPatientService} from "../../Service/fichepatient.service";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  patientId: any;
  fichepatient: any;

  constructor(private route: ActivatedRoute,private fichPatientService:fichPatientService ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patientId = params.get('id');

      console.log(this.patientId);
      this.loadPatientProfile();
    });
  }

  loadPatientProfile(): void {
    if (this.patientId) {
      // Call your service to get the patient data using the patientId
      this.fichPatientService.getfichepatientById(this.patientId).subscribe(
        response => {
          this.fichepatient = response;
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

}
