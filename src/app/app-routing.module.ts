import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//CArregamento Lazy load para escalabidade futura
const routes: Routes = [
  {path: '', redirectTo: '/lista/onibus', pathMatch: 'full' },
  { path: 'lista/lotacao',  loadChildren: () => import('./modules/lista/lista.module').then(m => m.ListaModule) }, 
  { path: 'lista/onibus',  loadChildren: () => import('./modules/lista/lista.module').then(m => m.ListaModule) }, 
  { path: 'intinerario/:id', loadChildren: () => import('./modules/intinerario/intinerario.module').then(m => m.IntinerarioModule) },
  { path: '404', loadChildren: () => import('./modules/erro404/erro404.module').then(m => m.Erro404Module) },
  { path: '**', redirectTo: '/404' } 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
