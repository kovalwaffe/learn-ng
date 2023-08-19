import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authStatesGuard: CanActivateFn = (states: string[]) => {
  if (states.includes('LOGGED_IN') && inject(AuthService).isLoggedIn()) {
    return true;
  }
  return inject(Router).navigate(['/login']);
};
