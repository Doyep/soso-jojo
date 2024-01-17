import { Component } from '@angular/core';
import { Guest } from '../../models/guest.model';
import { MatIconModule } from '@angular/material/icon';
import { GuestService } from '../../services/guest.service';
import { Observable, catchError, filter, finalize, first, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, RouterModule],
  providers: [HttpClientModule],
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.scss'
})
export class GuestListComponent {
  public $guests: Observable<Guest[]>
  public invalid = true
  public sending = false

  constructor(
    private guestService: GuestService,
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService,
  ) {
    this.$guests = this.guestService.$guests.pipe(
      tap(guests => this.invalid = guests.length === 0)
    )
  }

  public onCreate() {
    this.router.navigateByUrl('/guest/new')
  }

  public onEdit(id: string) {
    this.router.navigate(['/guest', id])
  }

  public onDelete(guest: Guest) {
    this.guestService.delete(guest)
  }

  public onSubmit() {
    const path = environment.baseUrl + '/guest'
    this.guestService.$guests.pipe(
      tap(() => this.sending = true),
      first(),
      filter(guests => guests.length > 0),
      switchMap(guests => this.http.post<any>(path, guests)),
      tap(() => this.toastService.success('Votre réponse a bien été enregistrée')),
      tap(() => this.guestService.resetList()),
      catchError(error => {
        this.toastService.error('Une erreur est survenue')
        throw new Error(error)
      }),
      finalize(() => this.sending = false)
    ).subscribe()
  }
}
