import { Component } from '@angular/core';
import { InstitucionMamaService } from 'src/app/core/services/intituciones-mama/institucion-mama.service';
import { Router } from '@angular/router';

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

  center: google.maps.LatLngLiteral = { lat: 4.5882175, lng: -74.0845733 };
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  constructor(private institucionService: InstitucionMamaService, private router: Router) { }

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

  markerDragEnd(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
    }
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario
    // Incluyendo la ubicación seleccionada en el mapa
  }
}