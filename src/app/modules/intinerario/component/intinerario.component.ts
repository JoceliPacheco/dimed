import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from '../services/intinerario.service';
 
import { ActivatedRoute } from '@angular/router';
import { Marker } from './intinerario.interface';
 
@Component({
  selector: 'app-intinerario',
  templateUrl: './intinerario.component.html',
  styleUrls: ['./intinerario.component.scss']
})
export class IntinerarioComponent implements OnInit {

 
  public center: any;
  public linha:string = '';
  public load:boolean = true;
  public markers: Marker[] = [];
  public eu: boolean = false;
  public btnGps: boolean = false;
  public ultima:any = {};
  
  constructor( 
    private api: RequestsService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.listar(); // Lista trajeto
    

    //Verifica permissão de pega Geolocalização
    navigator.geolocation.getCurrentPosition(position => {
      this.btnGps = true;
    })

  }

  listar(){
    // Pega ID da linha da URL
    const id = this.route.snapshot.params.id;

    this.load = true;

    //Requisição da API
    this.api.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`)
    .then((data: any) => {
      this.linha = `${data.codigo} ${data.nome}`;

      //Centraliza no primeiro ponto
      this.center = {
        lat: Number(data[0].lat)  ,
        lng: Number(data[0].lng) ,
      }

      let exit = false; //Controle da saida
    
      for(let i=0; exit = true; i++){
    
        //Add PIN inicial
        if (i == 0)  this.addMarker(data[i], { });

        if (!data[i].lat || i > 250){
          exit = true;
        }else{
          this.ultima = data[i];
          this.addMarker(data[i], { icon: '/assets/icon.png' });
        }
      
      }
    })
    .finally(() =>  {
      this.load = false;
      this.addMarker(this.ultima, {}); // Add ultimo PIN no Mapa
    })
  }

  //Add ponto no MAPA
  addMarker(dados,opt, txt=''){
    this.markers.push({
      position: {
        lat: Number(dados.lat)  ,
        lng: Number(dados.lng) ,
      }, 
      options: opt,
      title: txt,
    })
  }

  gps(){
    
    navigator.geolocation.getCurrentPosition(position => {
      //Centraliza o mapa 
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      
      if (!this.eu){ //Verifica se precisa addMarker()
        this.eu = true;
        this.addMarker(
            { lat:position.coords.latitude, lng: position.coords.longitude },
            { animation: google.maps.Animation.BOUNCE },
            'Estou aqui'
        ) 
      }
      
    })
  }

}
