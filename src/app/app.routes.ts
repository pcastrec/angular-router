import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomePage } from './pages/home-page/home-page';
import { Dashboard } from './pages/dashboard/dashboard';
import { authenticationGuard } from './guards/authentication-guard';
import { guestGuard } from './guards/guest-guard';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'login', component: Login, canActivate: [guestGuard] },
    { path: 'dashboard', component: Dashboard, canActivate: [authenticationGuard] }
    // { path: '**', component: NotFound } Un beau 404 Not Found ici
];