import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BoostedBoardComponent } from './boosted-board/boosted-board.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'boostedBoard',
    pathMatch: 'full',
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'boostedBoard', component: BoostedBoardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
