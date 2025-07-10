import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  dataConsent: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }
  onLogin(): void {
    // Validar que se haya aceptado el consentimiento de datos
    if (!this.dataConsent) {
      alert('Debe aceptar el uso y guardado de datos personales para continuar.');
      return;
    }

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

}
