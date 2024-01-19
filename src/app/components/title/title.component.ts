import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: ':host { @apply flex-none font-courgette text-3xl text-center; }',
})
export class TitleComponent { }
