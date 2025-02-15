import { Component } from '@angular/core';
import { InstitucionMamaService } from 'src/app/core/services/intituciones-mama/institucion-mama.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private institucionService: InstitucionMamaService) { }

  ngOnInit() {
    this.institucionService.getInstituciones().subscribe((data: any) => {
      console.log(data);
    });
  }

}
