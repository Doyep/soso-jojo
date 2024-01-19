import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: ':host { @apply flex-1 flex flex-col items-center text-center gap-4 overflow-auto; }',
})
export class MainComponent { }
