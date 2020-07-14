import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Erro404Component } from './erro404.component';


const routes: Routes = [
  { path: '', component: Erro404Component } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Erro404RoutingModule { }
