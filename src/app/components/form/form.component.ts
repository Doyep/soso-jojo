import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuestFormComponent } from '../guest-form/guest-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GuestFormComponent, MatExpansionModule, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      guests: this.formBuilder.array([
        this.createGuestFormGroup()
      ])
    })
  }

  private createGuestFormGroup() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      status: ['present']
    })
  }

  public addGuest() {
    this.guests.push(this.createGuestFormGroup())
  }

  public get guests() {
    return this.form.get('guests') as FormArray
  }

  public onRemoveGuest(index: number) {
    if (this.guests.controls.length === 1) return
    this.guests.removeAt(index)
  }
}
