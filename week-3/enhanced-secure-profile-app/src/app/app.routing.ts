//Author: Evelyn Zepeda
//Date: 4/7/24
//Title: app-routing.ts
//Description: Sets up the routes for the enhanced-secure-profile-app.



import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SignInGuard} from './sign-in.guard'


export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
