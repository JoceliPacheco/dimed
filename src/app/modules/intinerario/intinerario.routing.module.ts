import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntinerarioComponent } from './component/intinerario.component';


const routes: Routes = [
  { path: '', component: IntinerarioComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntinerarioRoutingModule { }
