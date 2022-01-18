import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    //console.log('servicio de info pagina listo');

    //leer archivo en JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log( resp );
      })
      
      
      /*el siguiente metodo no funciona
      .subscribe( resp => {
        console.log( resp['titulo'] );
      })*/


  }
}
