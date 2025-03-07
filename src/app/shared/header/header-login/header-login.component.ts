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
  userInfo: any

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    console.log('User Name:', this.userName); // Debugging line
    this.userInfo = this.loginService.getUserInfo()
  }

  logout(): void {
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

}
