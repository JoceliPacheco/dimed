import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { RequestsService } from '../services/lista.service';
import { Router  } from '@angular/router';
import { Lista } from './lista.interface';
 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public p: number = 1;
  public lista: Lista[]  = []; 
  public load = true;
  public search = '';
  public coluna = 'nome';
  public dir = false;
  constructor(
    private api: RequestsService,
    private route: Router 
  ) {  }
 

  ngOnInit(): void {
 
    this.listar();
  }
  
  clicou(e){
    console.log(e);
  }
 
  listar(){
    //Define se a pagina deve lista/. Lotações ou Onibus
    const tipo = this.route.url=='/lista/lotacao' ? 'l': 'o';
    
    this.load = true;
    this.api.get(`http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=${tipo}`)
    .then((data:Lista[]) => {
      this.lista = data ;
    })
    .finally(() =>  this.load = false)
  }

  

}
