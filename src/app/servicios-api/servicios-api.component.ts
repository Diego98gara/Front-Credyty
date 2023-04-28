import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-servicios-api',
  templateUrl: './servicios-api.component.html',
  styleUrls: ['./servicios-api.component.css']
})
export class ServiciosApiComponent {

  constructor(private http: HttpClient) { };

  PostEnviarPk(jason: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>("https://localhost:44378/api/ingresoVehiculo", jason, httpOptions);


  }
  getConsultar() {
    return this.http.get("https://localhost:44378/api/ConsultarTodosSinPago");
  }
  getConsultarValorApagar(jason: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>("https://localhost:44378/api/ConsultarValorPagar", jason, httpOptions);

  }

  PostSalidaVehiculo(jason: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>("https://localhost:44378/api/salidaVehiculo", jason, httpOptions);
  }

  postFiltroCarga(jason: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>("https://localhost:44378/api/ConsultarRango", jason, httpOptions);
  }



}
