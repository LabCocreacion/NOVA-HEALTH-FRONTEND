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

  constructor(private institucionService: InstitucionMamaService, private router: Router) { }

  toggleSelection(index: number) {
    this.serviceTypeBoxes[index].selected = !this.serviceTypeBoxes[index].selected;
  }

  onSubmit() {
    // if (form.valid) {
    //   this.institucionService.addInstitucion(form.value).subscribe(() => {
    //     this.router.navigate(['/tamizacion-mama/instituciones']);
    //   }, error => {
    //     console.error('Error adding institucion:', error);
    //   });
    // }
  }
}