import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SuccessToastComponent } from '../components/success-toast/success-toast.component';
import { ErrorToastComponent } from '../components/error-toast/error-toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  public success(message: string) {
    this._snackBar.openFromComponent(SuccessToastComponent, { data: message, duration: 10000 })
  }

  public error(message: string) {
    this._snackBar.openFromComponent(ErrorToastComponent, { data: message, duration: 4000 })
  }
}
