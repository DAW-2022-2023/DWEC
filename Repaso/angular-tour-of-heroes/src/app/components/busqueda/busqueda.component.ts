import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  data: String;

  constructor() {
    this.data = "jajalol";
  }

  ngOnInit(): void {
    this.data = "oeee ee"
  }

}
