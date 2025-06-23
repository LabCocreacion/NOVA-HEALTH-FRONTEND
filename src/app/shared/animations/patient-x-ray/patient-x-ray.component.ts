import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-patient-x-ray',
  templateUrl: './patient-x-ray.component.html',
  standalone: true,
  imports: [CommonModule, LottieComponent]
})
export class PatientXRayComponent {

  options: AnimationOptions = {
    path: 'assets/lottie/patient-x-ray.json',
  }

}
