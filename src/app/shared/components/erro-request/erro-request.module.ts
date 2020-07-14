import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ErroRequestComponent } from './erro-request.component';
 
@NgModule({
  declarations: [ErroRequestComponent],
  imports: [
    CommonModule
  ],
  providers: [ ],
  exports: [ ErroRequestComponent ]
})
export class ErroRequestModule { }
