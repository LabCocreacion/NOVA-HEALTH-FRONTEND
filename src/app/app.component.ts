import { Component } from '@angular/core';
import { LoginService } from './core/services/login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  constructor(public loginService: LoginService) { }
  title = 'Cocreamos INC';
}
