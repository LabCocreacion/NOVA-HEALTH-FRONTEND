import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'bootstrap';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewChecked {
  @ViewChild('carouselExampleIndicators', { static: false }) carouselElementRef!: ElementRef;
  carousel!: Carousel;
  carouselInitialized = false;
  calendarOptions: any;


  constructor() {
    this.calendarOptions = {
      // Tus opciones de calendario van aquí
    };
  }

  ngAfterViewChecked() {
    if (!this.carouselInitialized) {
      setTimeout(() => {
        this.carousel = new Carousel(this.carouselElementRef.nativeElement, {
          interval: 1000, // 2 seconds
        });
        this.carousel.cycle(); 
        this.carouselInitialized = true;
      }, 0);
    }
  }
  
  prevButtonClicked(event: Event) {
    event.preventDefault();
    
    const carouselElement = this.carouselElementRef.nativeElement;
    const carouselItems = carouselElement.querySelectorAll('.carousel-item');
    const activeItem = carouselElement.querySelector('.carousel-item.active');
    
    if (activeItem === carouselItems[0]) {
      return;
    }
    
    this.carousel.prev();
  }
  
  nextButtonClicked(event: Event) {
    event.preventDefault();
    this.carousel.next();
  }
  
}