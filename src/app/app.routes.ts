import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      component: FormComponent
    }]
  },
  { path: '**', redirectTo: '' },
];
