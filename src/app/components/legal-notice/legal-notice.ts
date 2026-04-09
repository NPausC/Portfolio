import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
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
      if (target.closest('.legal-notice__menu-shell') || target.closest('.legal-notice__menu-button')) {
        return;
      }

      this.navigateHome();
      return;
    }

    if (!target.closest('.legal-notice__page')) {
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

    if (target.closest('.legal-notice__menu-shell') || target.closest('.legal-notice__menu-button')) {
      return;
    }

    this.navigateHome();
  }
}

