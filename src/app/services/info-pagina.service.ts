import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();

    //console.log('servicio de info pagina listo');
      /*el siguiente metodo no funciona
      .subscribe( resp => {
        console.log( resp['titulo'] );
      })*/


  }

private cargarInfo(){
//leer archivo en JSON
  this.http.get('assets/data/data-pagina.json')
  .subscribe( (resp: InfoPagina) => {

    this.cargada = true;
    this.info = resp;
  })
}


private cargarEquipo(){
  this.http.get('https://portafolio-5535a-default-rtdb.firebaseio.com/Equipo.json')
  .subscribe( (resp: any) => {

    this.equipo = resp;
  })

}


}
