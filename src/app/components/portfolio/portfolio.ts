import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects = [
    {
      projectNumber: '01/04',
      title: 'Join',
      subtitle: 'Task manager application',
      description: 'Kanban project management tool for creating and organizing tasks.',
      imageSrc: 'images/portfolio/join.png',
      imageAlt: 'Join project preview',
      reverse: false,
    },
    {
      projectNumber: '02/04',
      title: 'Sharkie',
      subtitle: '2D browser game',
      description: 'Side-scrolling game project with keyboard controls and level logic.',
      imageSrc: 'images/portfolio/sharkie.png',
      imageAlt: 'Sharkie project preview',
      reverse: true,
    },
    {
      projectNumber: '03/04',
      title: 'DABubble',
      subtitle: 'Chat application',
      description: 'Messaging app layout with channels, contacts and direct messages.',
      imageSrc: 'images/portfolio/dabubble.png',
      imageAlt: 'DABubble project preview',
      reverse: false,
    },
    {
      projectNumber: '04/04',
      title: 'Pokedex',
      subtitle: 'Pokemon information app',
      description: 'API based project for browsing pokemon data and detail views.',
      imageSrc: 'images/portfolio/pokedex.png',
      imageAlt: 'Pokedex project preview',
      reverse: true,
    },
  ];
}
