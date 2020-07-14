import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from '../../core/services/requests.service';
import { ListaComponent } from './lista.component';
import { ListaRoutingModule } from './lista.routng.module';
import { ErroRequestModule } from './../../shared/components/erro-request/erro-request.module';
 

@NgModule({
  declarations: [ListaComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListaRoutingModule,
    ErroRequestModule
  ],
  providers: [
    RequestsService
  ]
})
export class ListaModule { }
