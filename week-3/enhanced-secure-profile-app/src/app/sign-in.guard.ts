//Author: Evelyn Zepeda
//Date: 4/7/24
//Title: sign-in.guard.ts
//Description: Sign in guard for the enhanced secure profile app.


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private route: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn = next.queryParams.isLoggedIn;

      if(isLoggedIn) {
        return true;
      } else {
        this.route.navigate(['/']);
        return false;
      }
  }



}
