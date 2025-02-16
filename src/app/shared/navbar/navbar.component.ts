import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent {

  userName: string | null = null
  userProject: string | null = null
  isDropdownOpen: boolean[] = [true, true];

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    this.userProject = this.loginService.getUserProject();
    let userInfo = this.loginService.getUserInfo()
    console.log(userInfo)
    console.log(this.userProject)
  }

  toggleDropdown(index: number): void {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
  }

}
