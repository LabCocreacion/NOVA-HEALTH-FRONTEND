import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
  standalone: true,
  imports: [CommonModule, LottieComponent]
})
export class DoctorComponent {

    options: AnimationOptions = {
      path: 'assets/lottie/doctor.json',
    }

}
