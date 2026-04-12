import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit, OnDestroy {
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
}
