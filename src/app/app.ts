import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import { References } from './components/references/references';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AboutMe, Skills, Portfolio, References, Contact, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);

  showHomeContent(): boolean {
    return !this.router.url.startsWith('/legal-notice') && !this.router.url.startsWith('/privacy-policy');
  }
}
