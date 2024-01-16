import { Component } from '@angular/core';
import { Guest } from '../../models/guest.model';
import { MatIconModule } from '@angular/material/icon';
import { GuestService } from '../../services/guest.service';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatCardModule, RouterModule],
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.scss'
})
export class GuestListComponent {
  public $guests: Observable<Guest[]>
  public invalid = true

  constructor(
    private guestService: GuestService,
    private router: Router,
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
}
