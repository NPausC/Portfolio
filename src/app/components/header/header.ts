import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuIsOpen = false;

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  closeMenu(): void {
    this.menuIsOpen = false;
  }
}
