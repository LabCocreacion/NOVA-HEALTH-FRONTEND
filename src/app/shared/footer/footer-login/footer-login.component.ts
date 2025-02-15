import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service'

@Component({
    selector: 'app-footer-login',
    templateUrl: './footer-login.component.html',
    styleUrls: ['./footer-login.component.css'],
    standalone: false
})
export class FooterLoginComponent {
  userName: string | null = null;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    console.log('User Name:', this.userName); // Debugging line
  }

}
