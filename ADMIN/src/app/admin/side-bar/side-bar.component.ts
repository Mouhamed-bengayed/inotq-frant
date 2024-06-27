import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  isSidebarOpen = false;

  open(){

    this.isSidebarOpen = !this.isSidebarOpen;

  }
 isadmi:Boolean=false;
 ismedecin:Boolean=false;
  username: any;
  constructor() {
    // Retrieve the user string from localStorage
    const userStr = localStorage.getItem("user");
    // Check if userStr is null
    if (userStr) {
      // Parse the user string to an object
      const user = JSON.parse(userStr);
      this.username=user.username;

      // Check if authorities is defined and is an array
      if (user.authorities && Array.isArray(user.authorities) && user.authorities.length > 0) {
        const userAuthority = user.authorities[0].authority;

        if (userAuthority === "ROLE_ADMIN") {
          this.isadmi = true;
        } else if (userAuthority === "ROLE_MEDECIN") {
          this.ismedecin = true;
        }
      } else {
        console.error("User authorities are not defined or not an array");
      }
    } else {
      console.error("User is not defined in localStorage");
    }
  }

  ngOnInit(): void {
  }

}
