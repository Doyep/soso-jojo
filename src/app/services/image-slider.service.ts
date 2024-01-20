import { Injectable } from '@angular/core';
import { zeroPad } from '../utils/numbers';

const TOTAL_IMAGES_NUMBER = 62

@Injectable({
  providedIn: 'root'
})
export class ImageSliderService {
  availableImageIds: string[] = []
  usedImageIds: string[] = []

  constructor() {
    for (let i = 0; i < TOTAL_IMAGES_NUMBER; i++)
      this.availableImageIds.push(zeroPad(i + 1, 2))
  }

  public pickRandomImage() {
    if (this.availableImageIds.length === 0) throw new Error('No available Image')
    const imageIndex = Math.floor(Math.random() * this.availableImageIds.length)
    const pickedImage = this.availableImageIds.splice(imageIndex, 1)[0]
    this.usedImageIds.push(pickedImage)
    return pickedImage
  }

  public freeImage(id: string) {
    const imageIndex = this.usedImageIds.findIndex(imageId => imageId === id)
    if (imageIndex === -1) throw new Error('Image not found')
    const pickedImage = this.usedImageIds.splice(imageIndex, 1)
    this.availableImageIds.push(pickedImage[0])
  }
}
