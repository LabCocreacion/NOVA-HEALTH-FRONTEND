import { Component } from '@angular/core';
import { InstitucionMamaService } from 'src/app/core/services/intituciones-mama/institucion-mama.service';
import { Instituto } from 'src/app/core/models/instituto.model';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-institutos-list',
  templateUrl: './institutos-list.component.html',
  styleUrls: ['./institutos-list.component.css'],
  standalone: false
})
export class InstitutosListComponent {
  instituciones: Instituto[] = [];
  selectedInstitucion: Instituto | null = null;

  constructor(private institucionService: InstitucionMamaService, private router: Router) { }

  ngOnInit() {
    this.loadInstituciones();
  }

  loadInstituciones() {
    this.institucionService.getInstituciones().subscribe((data: any) => {
      this.instituciones = data;
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
}