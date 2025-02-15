import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let images = this.el.nativeElement.querySelectorAll('img');
    if (window.pageYOffset > 100) { 
      images.forEach((img: HTMLImageElement) => { // Explicitly type 'img' as 'HTMLImageElement'
        img.classList.add('smaller');
      });
    } else {
      images.forEach((img: HTMLImageElement) => { // Explicitly type 'img' as 'HTMLImageElement'
        img.classList.remove('smaller');
      });
    }
  }

}
