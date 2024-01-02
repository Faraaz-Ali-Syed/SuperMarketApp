import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile = {
    name: 'Syed Faraaz Ali',
    contactNo: '7569656286',
    email: 'syedfaraazali@dentistryautomation.com'
  };
  isEditing = false;

  editProfile() {
    this.isEditing = true;
  }


  saveProfile() {
    // Add logic to save the data, e.g., make an API request
    this.isEditing = false;
  }

}
