import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type BackgroundState = 'show' | 'hide'

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private _state = new BehaviorSubject<BackgroundState>('hide')
  public $show = this._state.asObservable().pipe(map(state => state === 'show'))

  public toggleState() {
    this._state.value === 'show' ? this._state.next('hide') : this._state.next('show')
  }

  public set state(newState: BackgroundState) {
    if (this._state.value !== newState) this._state.next(newState)
  }
}
