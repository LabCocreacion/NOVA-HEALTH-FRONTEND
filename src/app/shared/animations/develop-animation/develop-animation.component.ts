import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-develop-animation',
  templateUrl: './develop-animation.component.html',
  standalone: true,
  imports: [CommonModule, LottieComponent]
})
export class DevelopAnimationComponent {

    options: AnimationOptions = {
      path: 'assets/lottie/develop-animation.json',
    }

}
