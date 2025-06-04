import { Component } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false,
    animations: [
      trigger('slideInOut', [
        state('in', style({ transform: 'translateX(0)', opacity: 1 })),
        state('out', style({ transform: 'translateX(-100%)', opacity: 0 })),
        transition('out => in', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('300ms cubic-bezier(0.4,0,0.2,1)')
        ]),
        transition('in => out', [
          animate('200ms cubic-bezier(0.4,0,0.2,1)', style({ transform: 'translateX(-100%)', opacity: 0 }))
        ]),
      ])
    ]
})
export class NavbarComponent {
  userName: string | null = null
  userProject: string | null = null
  isDropdownOpen: boolean[] = [true, true];
  userInfo: any;
  visible: boolean = true; // controla la visibilidad del navbar

  constructor(public loginService: LoginService) {
    window.addEventListener('toggle-navbar', (event: any) => {
      this.visible = !this.visible;
    });
  }

   navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'fas fa-th-large', pro: false },
    { label: 'General', route: '/general', icon: 'fas fa-chart-pie', pro: true },
    { label: 'Analítica', route: '/analytical', icon: 'fas fa-chart-line', pro: true },
    { label: 'Comunicación', route: '/ecommerce', icon: 'fa-solid fa-flag', pro: true },
  ];

  appItems = [
    { label: 'Reportes', route: '/phantom/list-reports', icon: 'fas fa-light fa-file' },
    { label: 'Instituciones', route: '/email', icon: 'fa-solid fa-hospital' },
    { label: 'Mamógrafos', route: '/phantom/list-mamografos', svg: 'assets/icons/mammogram-machine.svg' },
    { label: 'Phantoms', route: '/', icon: 'fas fa-columns' },
    { label: 'Usuarios', route: '/cocreamos-usuarios/users', icon: 'fas fa-address-book' },
  ];

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

  setVisible(state: boolean): void {
    this.visible = state;
  }

  toggleVisible(): void {
    this.visible = !this.visible;
  }

}
