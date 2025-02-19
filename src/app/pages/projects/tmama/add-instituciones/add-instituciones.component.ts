import { Component } from '@angular/core';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Instituto } from 'src/app/core/models/instituto.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-instituciones',
  templateUrl: './add-instituciones.component.html',
  styleUrls: ['./add-instituciones.component.css'],
  standalone: false
})
export class AddInstitucionesComponent {
  serviceTypeBoxes = [
    { id: 1, name: 'Mamografia', selected: false },
    { id: 2, name: 'Biopsia', selected: false },
    { id: 3, name: 'Estadificación', selected: false }
  ];

  //INC coordenadas de Bogotá
  center: google.maps.LatLngLiteral = { lat: 4.5882175, lng: -74.0845733 };
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  userName: string | null = null;

  constructor(private institucionService: TamizacionMamaService, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
  }

  toggleSelection(index: number) {
    this.serviceTypeBoxes[index].selected = !this.serviceTypeBoxes[index].selected;
  }

  mapClicked(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    }
  }

  markerDragEnd(event: any) {
    if (event.latLng) {
      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const selectedServices = this.serviceTypeBoxes
        .filter(box => box.selected)
        .map(box => box.name)
        .join(', ');

      const newInstituto: Instituto = {
        id: 0,
        nombre: form.value.nombre,
        nombre_ips: form.value.nombre_ips,
        codigo_ips: form.value.codigo_ips,
        direccion: form.value.direccion,
        tipo_servicio: selectedServices,
        caracter_juridico: form.value.caracter_juridico,
        telefono_gerencia: form.value.telefono_gerencia,
        telefono_enlace_tecnico: form.value.telefono_enlace_tecnico,
        zona: form.value.zona,
        fecha_creacion: new Date(),
        creation_user: this.userName || 'defaultUser', // Asigna el usuario actual
        latitud: this.center.lat,
        longitud: this.center.lng
      };

      this.institucionService.addInstitucion(newInstituto).subscribe(() => {
        this.router.navigate(['/tamizacion-mama/list-instituciones']);
      }, error => {
        console.error('Error al agregar la institución:', error);
      });
    }
  }
}