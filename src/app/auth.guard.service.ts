import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.authService.isAuth())this.router.navigate(['/signIn']);
        return this.authService.isAuth();
    }
}