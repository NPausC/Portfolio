import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuIsOpen = false;
  selectedLanguage: "EN" | "DE" = "EN";

  menuItems = [
    { label: 'About me', target: '#about-me' },
    { label: 'My skills', target: '#skills' },
    { label: 'Portfolio', target: '#portfolio' },
  ];

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  closeMenu(): void {
    this.menuIsOpen = false;
  }

  setLanguage(language: "EN" | "DE"): void {
    this.selectedLanguage = language;
  }
}
