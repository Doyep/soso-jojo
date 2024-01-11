import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuestFormComponent } from '../guest-form/guest-form.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, GuestFormComponent],
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
      status: ['', Validators.required]
    })
  }

  public addGuest() {
    this.guests.push(this.createGuestFormGroup())
  }

  public get guests() {
    return this.form.get('guests') as FormArray
  }

  public onRemoveGuest(index: number) {
    this.guests.removeAt(index)
  }
}
