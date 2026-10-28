import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const guestGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)

  return service.user() ? false : true;
};
