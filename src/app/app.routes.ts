import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { LoginComponent } from './pages/login/login.component';
import { GuestListComponent } from './pages/guest-list/guest-list.component';
import { GuestEditComponent } from './pages/guest-edit/guest-edit.component';
import { InformationsComponent } from './pages/informations/informations.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'announcement', component: AnnouncementComponent },
      { path: 'informations', component: InformationsComponent },
      { path: 'list', component: GuestListComponent },
      { path: 'guest/new', component: GuestEditComponent },
      { path: 'guest/:id', component: GuestEditComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];
