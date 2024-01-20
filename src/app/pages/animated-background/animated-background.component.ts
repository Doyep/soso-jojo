import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.scss'
})
export class AnimatedBackgroundComponent { }
