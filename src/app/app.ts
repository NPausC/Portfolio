import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AboutMe, Skills, Portfolio, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
