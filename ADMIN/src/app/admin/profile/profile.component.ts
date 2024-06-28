import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../Service/account.service";
type EditableField = 'username' | 'name' | 'adresse' | 'about' | 'introduction' | 'achievements' | 'full_name' | 'address' | 'phone' | 'email' | 'website';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any;
  constructor(private accountservice:AccountService ) { }

  ngOnInit(): void {
     this.user=this.accountservice.CurrentUserInfoSubject.getValue();
  }

 /* user = {
    username: 'Username',
    name: 'John Doe',
    adresse: 'Some Hospital',
    about: 'A brief description of you',
    introduction: 'Put a little about yourself here so people know they\'ve found the correct Kevin.',
    achievements: 'Examples: survived high school, have 3 kids, etc.',
    full_name: 'Jane A. Doe',
    address: '46 Gray\'s Inn Rd, London, WC1X 8LP',
    phone: '(123) 456 - 7890',
    email: 'spam@ztapps.com',
    website: 'ztapps.com'
  };*/

  editMode: Record<EditableField, boolean> = {
    username: false,
    name: false,
    adresse: false,
    about: false,
    introduction: false,
    achievements: false,
    full_name: false,
    address: false,
    phone: false,
    email: false,
    website: false
  };

  enableEdit(field: EditableField) {
    this.editMode[field] = true;
  }

  disableEdit(field: EditableField) {
    this.editMode[field] = false;
  }

  saveChanges() {
    console.log('Changes saved:', this.user);
    alert('Changes saved!');
  }
}
