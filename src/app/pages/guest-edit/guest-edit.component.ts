import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GuestService } from '../../services/guest.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Guest } from '../../models/guest.model';
import { filter, first, map, tap } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-guest-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatButtonToggleModule, MatInputModule, RouterModule],
  templateUrl: './guest-edit.component.html',
  styleUrl: './guest-edit.component.scss'
})
export class GuestEditComponent {
  id: string = ''
  mode: 'create' | 'edit' | null = null
  formGroup = this.initFormGroup()

  constructor(
    private formBuilder: FormBuilder,
    private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.mode = this.id ? 'edit' : 'create'
    if (this.mode === 'create') return

    this.guestService.$guests.pipe(
      first(),
      map(guests => guests.find(guest => guest.id === this.id)),
      filter(guest => !!guest),
      tap(guest => this.formGroup = this.initFormGroup(guest)),
    ).subscribe()
  }

  initFormGroup(guest: Guest = { id: '', firstName: '', lastName: '', status: 'present' }) {
    return this.formBuilder.group({
      firstName: [guest.firstName, Validators.required],
      lastName: [guest.lastName, Validators.required],
      status: [guest.status, Validators.required],
    })
  }

  onSubmit() {
    try {
      if (this.formGroup.invalid) return
      const guest = Object.assign({ id: this.id }, this.formGroup.value) as Guest
      this.mode === 'create' && this.guestService.add(guest)
      this.mode === 'edit' && this.guestService.edit(guest)
      this.router.navigate(['/list'])
    } catch (error: any) {
      this.toastService.error(error.message)
    }
  }
}
