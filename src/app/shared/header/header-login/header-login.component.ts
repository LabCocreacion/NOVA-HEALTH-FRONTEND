import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-login',
    templateUrl: './header-login.component.html',
    styleUrls: ['./header-login.component.css'],
    standalone: false
})
export class HeaderLoginComponent {
  userName: string | null = null;
  userInfo: any;
  menuOpen: boolean = false;
  navbarOpen: boolean = false; // controla el estado del navbar

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    console.log('User Name:', this.userName); // Debugging line
    this.userInfo = this.loginService.getUserInfo()
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
    window.dispatchEvent(new CustomEvent('toggle-navbar', { detail: this.navbarOpen }));
  }

  goToAccount(): void {
    this.menuOpen = false;
    this.router.navigate(['/mi-cuenta']);
  }

  goToReports(): void {
    this.menuOpen = false;
    this.router.navigate(['/mis-reportes']);
  }

  logout(): void {
    this.menuOpen = false;
    this.loginService.logout();
    this.router.navigate(['/index']);
  }

  getBackgroundColor(): string {
    if (this.userInfo.userProject === 'Phantom') {
      return '#1B3A4B';
    } else if (this.userInfo.userProject === 'Tamización Mama') {
      return '#FFFFFF';
    } else {
      return '#1B3A4B'; // Default color
    }
  }

  getBackgroundColorButton(): string {
    if (this.userInfo.userProject === 'Phantom') {
      return '#5DA3A4';
    } else if (this.userInfo.userProject === 'Tamización Mama') {
      return '#C8A2C8';
    } else {
      return '#5DA3A4'; // Default color
    }
  }

  toggleTheme(): void {
    // Aquí puedes implementar la lógica para alternar el tema globalmente.
    // Ejemplo simple: alternar una clase en el body o llamar a un ThemeService.
    document.body.classList.toggle('dark-theme');
  }

}
