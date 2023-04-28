import { Component } from '@angular/core';
import { ServiciosApiComponent } from '../servicios-api/servicios-api.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tipoVehiculo: string = "";
  placa: string = "";
  fecha: Date = new Date();
  ArregloData: any[] = [];

  constructor(
    private ServiciosApiComponent: ServiciosApiComponent,
    private router: Router
  ) { }

 
  onSubmit() {
    const formData = {
      tipoVehiculo: this.tipoVehiculo,
      placa: this.placa,
      horaIngreso: this.fecha,
      EstadoPago: "SinPago"
    };
    console.log(formData);

    this.ServiciosApiComponent.PostEnviarPk(formData).subscribe((data: any) => {
      if(data !== "" || data !== null){
        this.router.navigate(['/contenido']);
      }
    });
  }

 

}
