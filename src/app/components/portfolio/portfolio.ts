import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

type Project = {
  projectNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  liveLink: string;
  githubLink: string;
  reverse: boolean;
};

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects: Project[] = [
    {
      projectNumber: '01/04',
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageSrc: 'images/portfolio/join.png',
      imageAlt: 'Join project preview',
      liveLink: 'https://example.com/join',
      githubLink: 'https://github.com/example/join',
      reverse: false,
    },
    {
      projectNumber: '02/04',
      title: 'Sharkie',
      subtitle: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imageSrc: 'images/portfolio/sharkie.png',
      imageAlt: 'Sharkie project preview',
      liveLink: 'https://example.com/sharkie',
      githubLink: 'https://github.com/example/sharkie',
      reverse: true,
    },
    {
      projectNumber: '03/04',
      title: 'DABubble',
      subtitle: 'Angular | TypeScript | Firebase',
      description:
        'This App is a Slack Clone. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      imageSrc: 'images/portfolio/dabubble.png',
      imageAlt: 'DABubble project preview',
      liveLink: 'https://example.com/dabubble',
      githubLink: 'https://github.com/example/dabubble',
      reverse: false,
    },
    {
      projectNumber: '04/04',
      title: 'Pokedex',
      subtitle: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imageSrc: 'images/portfolio/pokedex.png',
      imageAlt: 'Pokedex project preview',
      liveLink: 'https://example.com/pokedex',
      githubLink: 'https://github.com/example/pokedex',
      reverse: true,
    },
  ];
}
