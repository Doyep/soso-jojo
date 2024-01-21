import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedBackgroundComponent } from './pages/animated-background/animated-background.component';
import { BackgroundService } from './services/background.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimatedBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Soso & Jojo';
  public showBackground = true
  private _ngUnsubscribe = new Subject<void>()

  constructor(private backgroundService: BackgroundService) {
    this.backgroundService.$show.pipe(
      takeUntil(this._ngUnsubscribe),
    ).subscribe(state => this.showBackground = state)
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next()
    this._ngUnsubscribe.complete()
  }
}
