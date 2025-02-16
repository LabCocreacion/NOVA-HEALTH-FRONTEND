import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent {

  userInfo: any

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.userInfo = this.loginService.getUserInfo()
  }

}
