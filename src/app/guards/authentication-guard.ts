import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  
  return service.user() ? true : false
};
