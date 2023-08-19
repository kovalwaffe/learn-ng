import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authStatesGuard } from './guard/auth-states.guard';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  {
    path: '/home',
    component: HomeComponent,
    canActivate: [authStatesGuard(['LOGGED_IN'])],
    data: { states: ['LOGGED_IN'] },
  },
  { path: '**', redirectTo: '/home' },
];

// async function isLoggedInGuard() {
//   if (!(await inject(AuthService).isLoggedIn())) {
//     return true;
//   }
//   return inject(Router).navigate('/home');
// }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionalRouteGuardsRoutingModule {}
