import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';

type Project = {
  projectNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  hoverImageSrc: string;
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
export class Portfolio implements AfterViewInit, OnDestroy {
  @ViewChild('spacerArrow') private spacerArrowRef?: ElementRef<HTMLDivElement>;
  private observer?: IntersectionObserver;
  private inView = false;

  arrowIsAnimating = false;

  ngAfterViewInit(): void {
    const arrowElement = this.spacerArrowRef?.nativeElement;
    if (!arrowElement) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !this.inView) {
            this.inView = true;
            this.startArrowAnimation();
          } else if (!entry.isIntersecting) {
            this.inView = false;
            this.arrowIsAnimating = false;
          }
        }
      },
      { threshold: 0.4 },
    );

    this.observer.observe(arrowElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private startArrowAnimation(): void {
    this.arrowIsAnimating = false;
    requestAnimationFrame(() => {
      this.arrowIsAnimating = true;
    });
  }

  projects: Project[] = [
    {
      projectNumber: '01/04',
      title: 'Join',
      subtitle: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageSrc: 'images/portfolio/join.png',
      hoverImageSrc: 'images/portfolio/join-color.png',
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
      hoverImageSrc: 'images/portfolio/sharkie-color.png',
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
      hoverImageSrc: 'images/portfolio/dabubble-color.png',
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
      hoverImageSrc: 'images/portfolio/pokedex-color.png',
      imageAlt: 'Pokedex project preview',
      liveLink: 'https://example.com/pokedex',
      githubLink: 'https://github.com/example/pokedex',
      reverse: true,
    },
  ];
}
