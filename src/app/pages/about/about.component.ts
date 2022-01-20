import { Component, OnInit } from '@angular/core';
import { InfoPaginaComponent } from 'src/app/services/info-pagina/info-pagina.component';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
