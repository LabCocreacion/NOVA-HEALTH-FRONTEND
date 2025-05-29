import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-mamography',
  templateUrl: './mamography.component.html',
  styleUrl: './mamography.component.css',
  standalone: true,
  imports: [CommonModule, LottieComponent]
})
export class MamographyComponent {

  options: AnimationOptions = {
    path: 'assets/lottie/breast-mammography.json',
  }

}
