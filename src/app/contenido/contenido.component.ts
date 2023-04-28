import { Component } from '@angular/core';
import { ServiciosApiComponent } from '../servicios-api/servicios-api.component';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
  providers: [NgbPaginationConfig]
})
export class ContenidoComponent {

  ArregloData: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  pageSize = 4;
  valorPagar: String = "";
  Total: String = "";
  tarjetaSeleccionada: any;

  constructor(
    private ServiciosApiComponent: ServiciosApiComponent,
    config: NgbPaginationConfig,
    private router: Router
  ) {

    config.maxSize = 2;
    config.pageSize = this.pageSize;
    config.boundaryLinks = true;
    config.rotate = true;
  }

  ngOnInit() {
    this.getCarrosParqueados()
  }


  getCarrosParqueados() {
    this.ServiciosApiComponent.getConsultar().subscribe((data: any) => {
      for (let index = 0; index < data.length; index++) {
        this.ArregloData.push(data[index]);
      }
      this.getPaginatedData();
    })
  }

  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.ArregloData.slice(startIndex, endIndex);
  }


  valorApagar(tipoVehiculo: any, id: any) {
    this.tarjetaSeleccionada = id;
    const Consultar = {
      TipodeVehiculo: tipoVehiculo,
      CodigoFactura: this.valorPagar
    }
    this.ServiciosApiComponent.getConsultarValorApagar(Consultar).subscribe((data: any) => {
      console.log(data);
      this.Total = data;
    })

  }

  salidavehiculo(tipoVehiculo: any, id: any, arreglo: any) {
    this.tarjetaSeleccionada = id;
    const Consultar = {
      TipodeVehiculo: tipoVehiculo,
      CodigoFactura: this.valorPagar
    }
    this.ServiciosApiComponent.getConsultarValorApagar(Consultar).subscribe((data: any) => {
      this.Total = data;
      const SalidaVehiculo = {
        horaSalida: new Date(),
        numeroFactura: this.valorPagar,
        valorPagado: this.Total,
        idIngresoVehiculo: id,
      }
      const ingresoVehiculo = {
        idVehiculo: arreglo.idVehiculo,
        tipoVehiculo: arreglo.tipoVehiculo,
        placa: arreglo.placa,
        horaIngreso: arreglo.horaIngreso,
        EstadoPago: "Pago"
      }
      const JsonFinal = {
        SalidaVehiculo,
        ingresoVehiculo
      }
      this.ServiciosApiComponent.PostSalidaVehiculo(JsonFinal).subscribe((data: any) => {
        this.ArregloData.splice(0, this.ArregloData.length);
        this.paginatedData.splice(0, this.paginatedData.length);
        this.getCarrosParqueados();
      })
    })

  }

}
