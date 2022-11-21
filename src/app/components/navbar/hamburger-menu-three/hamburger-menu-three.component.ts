import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-three',
  templateUrl: './hamburger-menu-three.component.html',
  styleUrls: ['./hamburger-menu-three.component.css']
})
export class HamburgerMenuThreeComponent implements OnInit {

  trigger: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  setTrigger() {
    this.trigger = !this.trigger;
  }
}
