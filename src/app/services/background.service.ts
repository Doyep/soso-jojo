import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private _showBackground = new BehaviorSubject<boolean>(true)
  public $showBackground = this._showBackground.asObservable()

  public toggleBackground() {
    this._showBackground.next(!this._showBackground.value)
  }
}
