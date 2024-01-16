import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  public success(message: string) {
    this._snackBar.openFromComponent(ToastComponent, { data: message, duration: 4000 })
  }

  public error(message: string) {
    this._snackBar.openFromComponent(ToastComponent, { data: message, duration: 4000 })
  }
}
