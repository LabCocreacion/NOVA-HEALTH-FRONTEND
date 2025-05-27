import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-phantoms',
  templateUrl: './list-phantoms.component.html',
  styleUrl: './list-phantoms.component.css',
  standalone: false
})
export class ListPhantomsComponent {


  constructor(private router: Router) {}

  onAddPhantom(): void {
    this.router.navigate(['/phantom/create-phantom']);
  }

}
