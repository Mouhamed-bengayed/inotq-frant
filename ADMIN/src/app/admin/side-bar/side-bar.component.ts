import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../Service/account.service";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isAdmin: boolean = false;
  isSidebarOpen = false;

  isMedecin: boolean = false;
  username: string = '';
  profileImageUrl: any = 'https://bootdey.com/img/Content/avatar/avatar1.png';

  constructor(private accountService: AccountService, private http: HttpClient, private sanitizer: DomSanitizer) {



    const userStr = localStorage.getItem("user");

    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.username;
      const url = `http://localhost:8082/candidats/${user.id}/photo`;
      this.http.get(url, { responseType: 'blob' }).subscribe(
        response => {
          const objectURL = URL.createObjectURL(response);
          this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        },
        error => {
          console.error('Error loading profile image', error);
        }
      );
      // this.accountService.getuserById(user.id).subscribe((data: any) => {
      //   if (data.image) {
      //     this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${data.image}`);
      //   }
      // });

      if (user.authorities && Array.isArray(user.authorities) && user.authorities.length > 0) {
        const userAuthority = user.authorities[0].authority;

        if (userAuthority === "ROLE_ADMIN") {
          this.isAdmin = true;
        } else if (userAuthority === "ROLE_MEDECIN") {
          this.isMedecin = true;
        }
      } else {
        console.error("User authorities are not defined or not an array");
      }
    } else {
      console.error("User is not defined in localStorage");
    }
  }
  loadProfileImage() {

  }
  open() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  ngOnInit(): void {}


}
