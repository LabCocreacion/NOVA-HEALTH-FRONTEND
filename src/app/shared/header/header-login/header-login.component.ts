import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent {
  userName: string | null = null;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    console.log('User Name:', this.userName); // Debugging line
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/index']);
  }

}
