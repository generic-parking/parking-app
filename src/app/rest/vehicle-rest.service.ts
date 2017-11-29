import { Vehicle } from './../scenes/vehicle/model/vehicle';
import { Subscribable } from 'rxjs/Observable';
import { Search } from './../scenes/vehicle/model/search';
import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class VehicleRestService {
  constructor(private http: Http) { }

  doSearch(search: Search): Subscribable<Object> {
    return this.http.get('api/veiculo/pesquisar', { search: search });
  }

  register(vehicle: Vehicle): Subscribable<Object> {
    return this.http.post('api/veiculo', vehicle);
  }

}
