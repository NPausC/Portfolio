import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  constructor(private readonly router: Router) {}

  menuIsOpen = false;

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  closeMenu(): void {
    this.menuIsOpen = false;
  }

  navigateHome(): void {
    this.menuIsOpen = false;
    void this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    if (this.menuIsOpen) {
      if (target.closest('.privacy-policy__menu-shell') || target.closest('.privacy-policy__menu-button')) {
        return;
      }

      this.navigateHome();
      return;
    }

    if (!target.closest('.privacy-policy__page')) {
      this.navigateHome();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (!this.menuIsOpen) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    if (target.closest('.privacy-policy__menu-shell') || target.closest('.privacy-policy__menu-button')) {
      return;
    }

    this.navigateHome();
  }
}

