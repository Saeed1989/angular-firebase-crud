/**
 * authentication gurd to limit use of admin panel without logging in
 */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   * constructor
   * @param authService service for authentication
   * @param router router
   */
  constructor(private authService: AuthService, private router: Router) {}

  /** auth guard check */
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
