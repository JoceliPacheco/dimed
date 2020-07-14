import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { IntinerarioRoutingModule } from './intinerario.routing.module'; 
import { IntinerarioComponent } from './intinerario.component';
import { ErroRequestModule } from './../../shared/components/erro-request/erro-request.module';
 
 
@NgModule({
  declarations: [ IntinerarioComponent ],
  imports: [
    CommonModule,
    IntinerarioRoutingModule,
    ErroRequestModule
  ]
})
export class IntinerarioModule { }
