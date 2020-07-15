import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http';

import { IntinerarioRoutingModule } from './intinerario.routing.module'; 
import { IntinerarioComponent } from './component/intinerario.component';
import { ErroRequestModule } from './../../shared/components/erro-request/erro-request.module';
import { RequestsService } from './services/intinerario.service';
 
 
@NgModule({
  declarations: [ IntinerarioComponent ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    IntinerarioRoutingModule,
    ErroRequestModule ,
    HttpClientModule
  ],
  providers: [
    RequestsService
  ]
})
export class IntinerarioModule { }
