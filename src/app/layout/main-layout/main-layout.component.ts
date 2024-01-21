import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BackgroundService } from '../../services/background.service';
import { Subject, takeUntil } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  public showBackground = true
  get whiteBackground() { return this.router.url !== '/login' }
  private _ngUnsubscribe = new Subject<void>()

  constructor(
    private backgroundService: BackgroundService,
    private router: Router,
  ) {
    this.backgroundService.$show.pipe(
      takeUntil(this._ngUnsubscribe),
    ).subscribe(state => this.showBackground = state)
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next()
    this._ngUnsubscribe.complete()
  }

  public onToggleBackground() {
    this.backgroundService.toggleState()
  }

}
