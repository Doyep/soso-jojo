import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: ':host { @apply flex-none flex gap-4 justify-between; }',
})
export class FooterComponent { }
