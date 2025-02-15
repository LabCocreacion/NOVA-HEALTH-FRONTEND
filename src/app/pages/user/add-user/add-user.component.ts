import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    standalone: false
})
export class AddUserComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      numberphone: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
      isactive: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser).subscribe(
        response => {
          console.log('User added successfully', response);
          // TODO: mostrar popup de éxito y redireccionar al listado de usuarios
        },
        error => {
          console.error('Error adding user:', error);
        // TODO: mostrar popup de error
        }
      );
    }
  }

}
