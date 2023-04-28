import { Component } from '@angular/core';
import { ServiciosApiComponent } from '../servicios-api/servicios-api.component';
@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  fecha1: Date;
  fecha2: Date;
  ArregloData: any[] = [];

  constructor(
    private ServiciosApiComponent: ServiciosApiComponent,
  ) {
    this.fecha1 = new Date('2023-04-1');
    this.fecha2 = new Date('2023-04-30');
  }

  ngOnInit() {

    this.getfiltro(this.fecha1, this.fecha2);
  }

  getfiltro(fehcaIngreso: Date, fechasalida: Date) {
    this.ArregloData.splice(0, this.ArregloData.length);
    const FiltroCarga = ({
      horaIngreso: fehcaIngreso,
      horaSalida: fechasalida
    })

    this.ServiciosApiComponent.postFiltroCarga(FiltroCarga).subscribe((data: any) => {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        this.ArregloData.push(data[index]);
      }
    })
  }

}
