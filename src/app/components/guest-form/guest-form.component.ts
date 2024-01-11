import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './guest-form.component.html',
  styleUrl: './guest-form.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class GuestFormComponent {
  @Input() formGroupName: number = 0;
  public form = new FormGroup({});

  @Output()
  public removeEvent = new EventEmitter<number>();

  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit() {
    const guests = this.parentForm.control.get('guests') as FormArray
    this.form = guests.at(this.formGroupName) as FormGroup
  }

  onRemove() {
    this.removeEvent.emit(this.formGroupName)
  }
}
