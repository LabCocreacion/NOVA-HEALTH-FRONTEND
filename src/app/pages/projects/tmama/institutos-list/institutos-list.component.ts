import { Component, ViewChild } from '@angular/core';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { Instituto } from 'src/app/core/models/instituto.model';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-institutos-list',
  templateUrl: './institutos-list.component.html',
  styleUrls: ['./institutos-list.component.css'],
  standalone: false
})
export class InstitutosListComponent {
  instituciones: Instituto[] = [];
  selectedInstitucion: Instituto | null = null;

  // Vista: 'list' o 'map'
  viewMode: 'list' | 'map' = 'list';

  // Coordenadas centro de Colombia
  defaultLat = 4.570868;
  defaultLng = -74.297333;

  // Para el mapa
  mapCenter = { lat: this.defaultLat, lng: this.defaultLng };
  mapZoom = 5;
  selectedMapInstitucionIndex: number | null = null;

  // Referencia al componente GoogleMap
  @ViewChild(GoogleMap) map: GoogleMap | undefined;

  // Constante para la animación del marcador
  readonly markerBounce = (window as any).google?.maps?.Animation?.BOUNCE;

  // Iconos para los marcadores
  defaultMarkerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  selectedMarkerIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  constructor(private institucionService: TamizacionMamaService, private router: Router) { }

  ngOnInit() {
    this.loadInstituciones();
  }

  loadInstituciones() {
    this.institucionService.getInstituciones().subscribe((data: any) => {
      this.instituciones = (data || []).map((inst: any) => ({
        ...inst,
        latitud: Number(inst.latitud),
        longitud: Number(inst.longitud)
      }));
      console.log(this.instituciones);
    });
  }

  AddInstitucion() {
    this.router.navigate(['/tamizacion-mama/add-institucion']);
  }

  openModal(institucion: Instituto) {
    this.selectedInstitucion = institucion;
    const modalElement = document.getElementById('institucionModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  editInstitucion(institucion: Instituto) {
    // Lógica para editar la institución
    console.log('Editar institución:', institucion);
  }

  deleteInstitucion(institucion: Instituto) {
    // Lógica para eliminar la institución
    console.log('Eliminar institución:', institucion);
  }

  focusInstitucionOnMap(institucion: Instituto, index: number) {
    this.mapCenter = { lat: institucion.latitud, lng: institucion.longitud };
    this.mapZoom = 13;
    this.selectedMapInstitucionIndex = index;
    // Panear el mapa si la referencia existe
    setTimeout(() => {
      if (this.map) {
        this.map.panTo(this.mapCenter);
      }
    }, 0);
  }
}