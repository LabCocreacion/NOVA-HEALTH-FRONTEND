import { Component, OnInit } from '@angular/core';
import { TamizacionMamaService } from 'src/app/core/services/tamizacion-mama/tamizacion-mama.service';
import { Instituto } from 'src/app/core/models/instituto.model';

@Component({
  selector: 'app-load-files',
  templateUrl: './load-files.component.html',
  styleUrls: ['./load-files.component.css'],
  standalone: false
})
export class LoadFilesComponent implements OnInit {

  isModalOpen = false;
  instituciones: Instituto[] = [];
  selectedInstitucion: string | null = null;
  selectedFile: File | null = null;

  constructor(private institucionService: TamizacionMamaService) { }

  ngOnInit(): void {
    this.loadInstituciones();
  }

  loadInstituciones() {
    this.institucionService.getInstituciones().subscribe((data: any) => {
      this.instituciones = data;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedInstitucion = null;
    this.selectedFile = null;
  }

  onInstitucionChange() {
    // Lógica adicional si es necesario cuando se selecciona una institución
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile && this.selectedInstitucion) {
      // Lógica para cargar el archivo
      console.log('Archivo seleccionado:', this.selectedFile);
      console.log('Institución seleccionada:', this.selectedInstitucion);
      // Aquí puedes agregar la lógica para enviar el archivo al servidor
    }
    this.closeModal();
  }
}