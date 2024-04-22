
//Import statements for importing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  //Creating routes for the different components
  {
    path: '',
    component: BookListComponent
  },
  {
    path: '/book-list',
    component: BookListComponent
  },
  {
    path: '/contact',
    component: ContactComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
