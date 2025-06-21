import { Component } from '@angular/core';

@Component({
  selector: 'app-form-doble-lectura',
  standalone: false,
  templateUrl: './form-doble-lectura.component.html',
  styleUrl: './form-doble-lectura.component.css'
})
export class FormDobleLecturaComponent {
  fileName1: string = '';
  fileName2: string = '';

  onFileChange1(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fileName1 = input.files && input.files.length > 0 ? input.files[0].name : '';
  }

  onFileChange2(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fileName2 = input.files && input.files.length > 0 ? input.files[0].name : '';
  }
}
