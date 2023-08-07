import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router ,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user-service/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    console.log('isAuthenticated');
    return true;
  } 
}
