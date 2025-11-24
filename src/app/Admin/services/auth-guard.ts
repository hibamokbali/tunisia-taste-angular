import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  let stateConnexion = localStorage.getItem('connected');
  if (stateConnexion === 'true') return true;

  router.navigate(['/login']);
  return false;
};
