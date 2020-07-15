import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from '../services/intinerario.service';
 
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-intinerario',
  templateUrl: './intinerario.component.html',
  styleUrls: ['./intinerario.component.scss']
})
export class IntinerarioComponent implements OnInit {

 
  public center: any
  public linha = '';
  public load = true;
  public markers = [];
  public eu = false;

  
  constructor( 
    private api: RequestsService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    const id = this.route.snapshot.params.id;

    this.load = true;
    this.api.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`)
    .then((data: any) => {
      this.linha = `${data.codigo} ${data.nome}`;
      this.center = {
        lat: Number(data[0].lat)  ,
            lng: Number(data[0].lng) ,
      }

     let exit = false
      for(let i=0; exit = true; i++){
      
        if (!data[i].lat || i > 220){
          exit = true;
        }else{
          this.markers.push({
            position: {
              lat: Number(data[i].lat)  ,
              lng: Number(data[i].lng) ,
            }, 
            
            title: 'Estou aqui ' ,
            // options: { animation: google.maps.Animation.BOUNCE },
          })
        }
        
      }
      console.log('markers', this.markers)
      
    })
    .finally(() => setTimeout(() => {
      this.load = false
    },1000))
  }

 

  gps(){
    
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      if (!this.eu){
        this.eu = true;
        this.markers.push({
          position: {
            lat: Number(position.coords.latitude)  ,
            lng: Number(position.coords.longitude) ,
          }, 
          label: {
            color: 'green',
            text: 'Estou aqui',
          },
          title: 'Eu ' ,
          options: { animation: google.maps.Animation.BOUNCE },
        })
      }
      
    })
  }

}
