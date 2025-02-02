import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: string | null = null
  userProject: string | null = null
  isDropdownOpen: boolean[] = [false, false];

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
    this.userProject = this.loginService.getUserProject();
  }

  toggleDropdown(index: number): void {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
  }

}
