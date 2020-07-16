import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { RequestsService } from '../services/lista.service';
import { ActivatedRoute  } from '@angular/router';
import { Lista } from './lista.interface';
 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public p: number = 1;
  public lista: Lista[]  = []; 
  public load: boolean = true;
  public search: string = '';
  public coluna: string = 'nome';
  public dir: boolean = false;
  public tipo:string = 'onibus';
  constructor(
    private api: RequestsService,
    private route: ActivatedRoute 
  ) {  }
 

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.search = '';
      this.lista = [];
      this.tipo = data.tipo;
      this.listar();
    })
    
  }
  
  
  listar(){
    //Define se a pagina deve lista/. Lotações ou Onibus
    const tipo =  this.tipo=='lotacao' ? 'l': 'o';
    
    this.load = true;
    this.api.get(`http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=${tipo}`)
    .then((data:Lista[]) => {
      this.lista = data ;
    })
    .finally(() =>  this.load = false)
  }

  

}
