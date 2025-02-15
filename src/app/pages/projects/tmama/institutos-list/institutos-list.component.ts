import { Component } from '@angular/core';
import { InstitucionMamaService } from 'src/app/core/services/intituciones-mama/institucion-mama.service';
import { Instituto } from 'src/app/core/models/instituto.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-institutos-list',
    templateUrl: './institutos-list.component.html',
    styleUrls: ['./institutos-list.component.css'],
    standalone: false
})
export class InstitutosListComponent {
  instituciones: Instituto[] = []

  constructor(private institucionService: InstitucionMamaService, private router: Router) { }

  ngOnInit() {
    this.loadInstituciones();
  }

  loadInstituciones(){
    this.institucionService.getInstituciones().subscribe((data: any) => {
      this.instituciones = data
    });
  }

  AddInstitucion(){
    // this.institucionService.addInstitucion(institucion).subscribe(() => {
    //   this.loadInstituciones();
    // });
    this.router.navigate(['/tamizacion-mama/add-institucion']);
  }

}
