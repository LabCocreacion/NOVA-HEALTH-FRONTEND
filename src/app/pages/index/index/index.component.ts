import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewChecked {
  @ViewChild('carouselExampleIndicators', { static: false }) carouselElementRef!: ElementRef;
  carousel!: Carousel;
  carouselInitialized = false;

  ngAfterViewChecked() {
    if (!this.carouselInitialized) {
      setTimeout(() => {
        console.log("Hola mundo")
        this.carousel = new Carousel(this.carouselElementRef.nativeElement, {
          interval: 2000, // Cambia las imágenes cada 1000 milisegundos (1 segundo)
        });
        this.carousel.cycle(); // Inicia el carrusel
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
      // Estás en el primer elemento del carrusel, no hagas nada
      return;
    }
    
    this.carousel.prev();
  }
  
  nextButtonClicked(event: Event) {
    event.preventDefault();
    this.carousel.next();
  }
}