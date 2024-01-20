import { Component, Input } from '@angular/core';
import { ImageSliderService } from '../../services/image-slider.service';
import { NgClass } from '@angular/common';

const IMAGES_NUMBER = 10

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() direction: 'right' | 'left' = 'right'

  private _ids: string[] = []
  public get ids() { return [...this._ids, ...this._ids] }

  constructor(private imageSliderService: ImageSliderService) {
    for (let i = 0; i < IMAGES_NUMBER; i++)
      this._ids.push(this.imageSliderService.pickRandomImage())
  }

  public generateUrl(id: string) {
    return `assets/images/animations/${id}.jpeg`
  }

  public setDirectionClass() {
    return {
      'scrolling-left': this.direction === 'left',
      'scrolling-right': this.direction === 'right',
    }
  }
}
