import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { RequestsService } from './services/lista.service';
 import { ListaRoutingModule } from './lista.routng.module';
import { ErroRequestModule } from './../../shared/components/erro-request/erro-request.module';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ListaComponent } from './component/lista.component';


@NgModule({
  declarations: [ListaComponent, FilterPipe ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListaRoutingModule,
    ErroRequestModule,
    NgxPaginationModule,
    OrderModule 
  ],
  providers: [
    RequestsService
  ]
})
export class ListaModule { }
