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
      imageSrc: 'images/portfolio/join.png',
      imageAlt: 'Join project preview',
    },
    {
      projectNumber: '02/04',
      title: 'Sharkie',
      subtitle: '2D browser game',
      imageSrc: 'images/portfolio/sharkie.png',
      imageAlt: 'Sharkie project preview',
    },
    {
      projectNumber: '03/04',
      title: 'DABubble',
      subtitle: 'Chat application',
      imageSrc: 'images/portfolio/dabubble.png',
      imageAlt: 'DABubble project preview',
    },
    {
      projectNumber: '04/04',
      title: 'Pokedex',
      subtitle: 'Pokemon information app',
      imageSrc: 'images/portfolio/pokedex.png',
      imageAlt: 'Pokedex project preview',
    },
  ];
}
