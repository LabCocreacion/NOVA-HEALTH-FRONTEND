import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = []

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data
    });
  }

  editUser(id: number): void {
    
    console.log(`Editar usuario con ID ${id}`);
  }

  toggleActivation(user: User): void {
    // Lógica para activar/desactivar usuario
    user.isactive = !user.isactive;
    console.log(`Activar/desactivar usuario con ID ${user.id}`);
  }

  onAddUser(): void {
    this.router.navigate(['users/add-user']);
  }


}
