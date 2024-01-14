import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'announcement', pathMatch: 'full' },
      { path: 'announcement', component: AnnouncementComponent },
      { path: 'form', component: FormComponent }
    ]
  },
  { path: '**', redirectTo: '' },
];
