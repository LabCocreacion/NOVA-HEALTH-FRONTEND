import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhantomService } from 'src/app/core/services/phantom/phantom.service';

@Component({
  selector: 'app-list-mamografos',
  templateUrl: './list-mamografos.component.html',
  styleUrl: './list-mamografos.component.css',
  standalone: false
})
export class ListMamografosComponent {

  constructor(private phantomService: PhantomService) { }
  mamografos: any[] = [];

  ngOnInit() {
    this.loadMamografos();
  } 

  loadMamografos() {
    this.phantomService.getMamografos().subscribe((data: any) => {
      this.mamografos = data;
      console.log(this.mamografos);
    });
  }

}
