import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404RoutingModule } from './erro404.routing.module';
 
import { ErroRequestModule } from './../../shared/components/erro-request/erro-request.module';
import { Erro404Component } from './erro404.component';

@NgModule({
  declarations: [ Erro404Component ],
  imports: [
    CommonModule,
    Erro404RoutingModule  ,
    ErroRequestModule
  ]
})
export class Erro404Module { }
