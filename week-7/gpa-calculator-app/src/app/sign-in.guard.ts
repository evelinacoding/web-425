
//Author: Evelyn Zepeda
//Date: 5/3/24
//Assignment: Exercise 7.2 - Reactive Forms


//Import statements
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }
  
  //CanActivate has to return a true or false value
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const sessionUser = this.cookieService.get('session_user');

    if(sessionUser) {
      return true;
    } else {
      this.router.navigate(['/session/sign-in'])
      return false;
    }
  }

}
