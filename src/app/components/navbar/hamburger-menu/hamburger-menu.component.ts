import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  isChecked: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickHandler() {
    setTimeout(() => {
      this.isChecked = !this.isChecked;
    }, 200);

  }
  // goToClientInfo() {
  //   let i_id = this.client?.CLIENT_ID;
  //   this.router.navigate(
  //     ['/client-info'],
  //     { queryParams: { id: i_id } }
  //   );

  // }

  goToHome() {
    this.router.navigate(
      ['/home'],
    );
   }
  goToProjects() {
    this.router.navigate(
      ['/projects'],
    );
   }

  goToAboutUs() {
    this.router.navigate(
      ['/aboutUs'],
    );
  }

  goToNewsEvents() {
    this.router.navigate(
      ['/newsEvents'],
    );
  }

  goToContactUs() {
    this.router.navigate(
      ['/contactUs'],
    );
   }

}
