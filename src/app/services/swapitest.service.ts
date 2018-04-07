import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';///Importamos el map de rxjs

@Injectable()///Para que podamos injectar el servicio en el contructor de los componentes
export class SwapitestService {
  API_ENDPOINT: string = 'https://swapi.co/api/people/';
  data: any = [
    {}
  ];

  constructor(private http: Http) {

  }

  public obtenerRegistros() {
    ///Sacando los lugares usando http
    /**/

    return this.http.get(this.API_ENDPOINT + '?format=json')
      .map(res => {
        // debugger
          const data = res.json().results;
          return data;
        }
      );
  }

  public buscarRegistros(name) {
    return this.data.filter((persona) => {
      return persona.name == name
    })[0] || null;
  }
}
