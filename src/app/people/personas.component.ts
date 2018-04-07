import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SwapitestService} from "../services/swapitest.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  status = '200';
  statusText = 'OK';
  a = 3;
  b = 5;
  listo = false;
  // Usar los tipo de datos de Typescript
  nombre: string = '';
  personas = null;//Backup con todos los registros
  public searchString: string;

  constructor(private swapitestService: SwapitestService) {
    ///Variables para guardar los status de error al momento de consultar la info, por default todo es ok
    ///En el div del html mostramos el mensaje de error usando la directiva ngif cuando el response es 404 por ejemplo
    this.status = "200";
    this.statusText = "OK";

    //Obtencion de registros
    swapitestService.obtenerRegistros()
      .subscribe((personas) => {
          // debugger;///para parar la ejecucion del codigo y verlo en el explorador, automaticamente nos posiciona en la pestaña de
          //sources en el inspector del explorador
          this.personas = personas;
          ///Guardamos el scope en una variable para usarlo en la funcion anonima
          var me = this;
          this.personas = Object.keys(me.personas).map(function (key) {
            return me.personas[key];
          });
        },
        error => {
          console.log(error);
          this.status = error.status;
          this.statusText = error.statusText;
        });
  }


}
