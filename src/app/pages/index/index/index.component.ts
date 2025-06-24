import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'bootstrap';
import { CalendarComponent } from '../calendar/calendar.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    standalone: false
})
export class IndexComponent implements AfterViewChecked {
  @ViewChild('carouselExampleIndicators', { static: false }) carouselElementRef!: ElementRef;
  carousel!: Carousel;
  carouselInitialized = false;
  calendarOptions: any;
  email: string = '';
  password: string = '';
  showChatBot: boolean = false;


  constructor( private loginService: LoginService, private router: Router) {
    this.calendarOptions = {
      // opciones de calendario van aquí
    };
  }

  onLogin(): void {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    );
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
    // prueba
    
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