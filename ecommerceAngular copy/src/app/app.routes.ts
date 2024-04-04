import { Routes } from '@angular/router';
import { AppLogin } from './vistas/login/login.component';
import { PrincipalComponent } from './vistas/principal/principal.component';

export const routes: Routes = [
{ path: 'login', component: AppLogin },
{ path: '', component:  PrincipalComponent},
{ path: '**', component:  AppLogin},
];
