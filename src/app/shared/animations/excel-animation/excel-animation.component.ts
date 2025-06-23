import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-excel-animation',
  templateUrl: './excel-animation.component.html',
  standalone: true,
  imports: [CommonModule, LottieComponent]
})
export class ExcelAnimationComponent {

  options: AnimationOptions = {
    path: 'assets/lottie/excel-file-scanning.json',
  }
}
