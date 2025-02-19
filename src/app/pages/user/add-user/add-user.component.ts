import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { Instituto } from 'src/app/core/models/instituto.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  standalone: false
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  instituciones: Instituto[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private institucionService: TamizacionMamaService) { }

  ngOnInit(): void {
    this.loadInstituciones();
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email], [this.emailValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      identificacion: ['', Validators.required],
      numberphone: ['', Validators.required],
      address: [''],
      isactive: [false],
      password: ['', Validators.required],
      project: ['', Validators.required],
      rol: ['', Validators.required],
      instituto: ['', Validators.required]
    });
  }

  loadInstituciones() {
    this.institucionService.getInstituciones().subscribe((data: any) => {
      this.instituciones = data;
      console.log(this.instituciones);
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.userForm.value);
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      console.log('Adding user:', newUser);
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

  generatePassword(): void {
    const password = Math.random().toString(36).slice(-8);
    this.userForm.patchValue({ password });
  }

  copyPassword(): void {
    const password = this.userForm.get('password')?.value;
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        alert('Contraseña copiada al portapapeles');
      }, (err) => {
        console.error('Error al copiar la contraseña: ', err);
      });
    }
  }

  // emailValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  //   console.log('Validating email:', control.value);
  //   return this.userService.checkEmailExists(control.value).pipe(
  //     map(exists => (exists ? { emailExists: true } : null)),
  //     catchError(() => of(null))
  //   );
  // }
}