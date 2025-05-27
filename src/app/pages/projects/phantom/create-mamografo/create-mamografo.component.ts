import { Component } from '@angular/core';
import { PhantomService } from 'src/app/core/services/phantom/phantom.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-create-mamografo',
  templateUrl: './create-mamografo.component.html',
  styleUrl: './create-mamografo.component.css',
  standalone: false
})
export class CreateMamografoComponent {
  mamografo = {
    id_mamografo: null,
    institucion: '',
    modelo: '',
    num_serie: '',
    marca: '',
    proveedor: '',
    distancia_foco_soporte: null,
    tama_receptor_imagen: null
  };

  constructor(private phantomService: PhantomService, private loginService: LoginService) { }

  userInfo: any

    ngOnInit() {
    this.userInfo = this.loginService.getUserInfo()
    console.log(this.userInfo)
  }


  submit() {
    // Asegura que la institución del mamógrafo sea la del usuario logueado
    this.mamografo.institucion = this.userInfo?.userInstitucion || '';

    console.log('Mamógrafo a crear:', this.mamografo);
    this.phantomService.createMamografo(this.mamografo).subscribe({
      next: (res) => {
        // Maneja el éxito, por ejemplo, mostrar mensaje o redirigir
        console.log('Mamógrafo creado', res);
      },
      error: (err) => {
        // Maneja el error
        console.error('Error al crear mamógrafo', err);
      }
    });
  }
}
