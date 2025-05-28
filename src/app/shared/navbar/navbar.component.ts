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
  userInfo: any;

   navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'fas fa-th-large', pro: false },
    { label: 'General', route: '/general', icon: 'fas fa-chart-pie', pro: true },
    { label: 'Classic', route: '/classic', icon: 'fas fa-mug-hot', pro: true },
    { label: 'Analytical', route: '/analytical', icon: 'fas fa-chart-line', pro: true },
    { label: 'Ecommerce', route: '/ecommerce', icon: 'fas fa-globe', pro: true },
  ];

  appItems = [
    { label: 'Calendar', route: '/calendar', icon: 'fas fa-calendar-alt' },
    { label: 'Email', route: '/email', icon: 'fas fa-envelope' },
    { label: 'Kanban', route: '/kanban', icon: 'fas fa-columns' },
    { label: 'Contacts', route: '/contacts', icon: 'fas fa-address-book' },
  ];

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.userInfo = this.loginService.getUserInfo()
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
