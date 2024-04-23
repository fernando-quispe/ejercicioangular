import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LayoutComponent } from './componentes/layout/layout.component';

export const routes: Routes = [
    { path:'', redirectTo : 'login', pathMatch:'full' },
    { path:'login', component: LoginComponent },
    { path:'error', component: ErrorComponent },   
    { path:'', component: LayoutComponent, children: [
        { path:'bienvenido', component: BienvenidoComponent },   
      ]
    },      
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }