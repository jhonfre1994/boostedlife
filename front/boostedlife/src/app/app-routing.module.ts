import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BoostedBoardComponent } from './boosted-board/boosted-board.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RoleGuardService } from './guards/role-guard.service';
import { AuthService } from './guards/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    component: MenuComponent,
    canActivate:[AuthService],
    children: [
      {
        path: 'boostedBoard', component: BoostedBoardComponent
      },
      {
        path: 'boostedUsers', component: UsuariosComponent,
        canActivate: [RoleGuardService],
        data: {
          expectedRole: ["SuperAdmin"]
        }
      }
    ]
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
