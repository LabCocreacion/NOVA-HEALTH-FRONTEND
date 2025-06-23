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
  selectedFileName: string = '';
  isDragOver = false;

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
    this.selectedFileName = this.selectedFile ? this.selectedFile.name : '';
  }

  uploadFile() {
    if (this.selectedFile && this.selectedInstitucion) {
      // Lógica para cargar el archivo
      console.log('Archivo seleccionado:', this.selectedFile);
      console.log('Institución seleccionada:', this.selectedInstitucion);
      // Aquí puedes agregar la lógica para enviar el archivo al servidor
    }
    this.closeModal();
    this.selectedFileName = '';
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
    this.setDropzoneClass(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    this.setDropzoneClass(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    this.setDropzoneClass(false);
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.onFileSelected({ target: { files: event.dataTransfer.files } });
    }
  }

  setDropzoneClass(isOver: boolean) {
    setTimeout(() => {
      const dropzone = document.querySelector('.custom-file-upload.dropzone');
      if (dropzone) {
        if (isOver) {
          dropzone.classList.add('dragover');
        } else {
          dropzone.classList.remove('dragover');
        }
      }
    });
  }
}