import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  isExpanded = false;

  expandCard(): void {
    this.isExpanded = true;
  }

  @Input() projectNumber = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() hoverImageSrc = '';
  @Input() imageAlt = '';
  @Input() liveLink = '';
  @Input() githubLink = '';
  @Input() reverse = false;
}
