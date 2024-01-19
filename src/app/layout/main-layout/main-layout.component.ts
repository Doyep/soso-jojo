import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  get whiteBackground() { return this.router.url !== '/login' }

  constructor(private router: Router) { }
}
