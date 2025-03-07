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
  backgroundClass: string = '';

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.userInfo = this.loginService.getUserInfo()
  }

  getBackgroundImage(): string {
    if (this.userInfo.userProject === 'Phantom') {
      return "url('/assets/img/bg.jpg')";
    } else if (this.userInfo.userProject === 'Tamización Mama') {
      return "url('/assets/img/bg_mama.jpg')";
    } else {
      return "none";
    }
  }

  getBackgroundColor(): string {
    if (this.userInfo.userProject === 'Phantom') {
      return "rgba(0, 0, 0, 0.342)";
    } else if (this.userInfo.userProject === 'Tamización Mama') {
      return "rgba(0, 0, 0, 0.21)";
    } else {
      return "#fff";
    }
  }

}
