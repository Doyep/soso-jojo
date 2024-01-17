import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { LoginComponent } from './pages/login/login.component';
import { GuestListComponent } from './pages/guest-list/guest-list.component';
import { GuestEditComponent } from './pages/guest-edit/guest-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'announcement', component: AnnouncementComponent },
      { path: 'list', component: GuestListComponent },
      { path: 'guest/new', component: GuestEditComponent },
      { path: 'guest/:id', component: GuestEditComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];
