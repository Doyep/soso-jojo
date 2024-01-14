import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuestFormComponent } from '../guest-form/guest-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GuestFormComponent, MatExpansionModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [HttpClientModule]
})
export class FormComponent {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
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

  public onSubmit() {
    const path = environment.baseUrl + '/guest'
    this.http.post<any>(path, this.guests.value).subscribe(response => console.log(response))
  }

  public navigateToAnnouncement() {
    this.router.navigateByUrl('/announcement')
  }
}
