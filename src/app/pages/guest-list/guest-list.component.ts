import { Component } from '@angular/core';
import { Guest, GuestStatus } from '../../models/guest.model';
import { MatIconModule } from '@angular/material/icon';
import { GuestService } from '../../services/guest.service';
import { EMPTY, Observable, catchError, filter, finalize, first, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TitleComponent } from "../../components/title/title.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-list',
  standalone: true,
  providers: [HttpClientModule],
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.scss',
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatIconModule, MatCardModule, RouterLink, TitleComponent, FooterComponent]
})
export class GuestListComponent {
  public $guests: Observable<Guest[]>
  public invalid = true
  public sending = false

  constructor(
    private backgroundService: BackgroundService,
    private guestService: GuestService,
    private http: HttpClient,
    private router: Router,
    private toastService: ToastService,
  ) {
    this.$guests = this.guestService.$guests.pipe(tap(guests => this.invalid = guests.length === 0))
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
      tap(() => this.toastService.success('Votre réponse a bien été enregistrée.')),
      tap(() => this.guestService.resetList()),
      tap(() => this.backgroundService.toggleBackground()),
      tap(() => this.router.navigate(['announcement'])),
      catchError(() => {
        this.toastService.error('Une erreur est survenue, veuillez réessayer ultérieurement.')
        return EMPTY
      }),
      finalize(() => this.sending = false)
    ).subscribe()
  }

  public getStatus(status: GuestStatus) { return status === 'present' ? 'Présent' : 'Absent' }
}
