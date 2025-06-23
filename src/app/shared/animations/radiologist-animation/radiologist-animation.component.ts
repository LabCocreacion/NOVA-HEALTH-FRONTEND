import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-radiologist-animation',
  imports: [CommonModule, LottieComponent],
  templateUrl: './radiologist-animation.component.html',
  standalone: true,
})
export class RadiologistAnimationComponent {

  options: AnimationOptions = {
    path: 'assets/lottie/radiologist.json',
  }

}
