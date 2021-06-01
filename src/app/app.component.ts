import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCita: any [] = [];

  agregarCita(cita: any){
    this.listCita.push(cita);
    console.log(this.listCita);
  }

  eliminarCitaListado(index: number){
    this.listCita.splice(index, 1)
  }
}
