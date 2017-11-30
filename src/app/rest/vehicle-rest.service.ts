import { Vehicle } from './../scenes/vehicle/model/vehicle';
import { Subscribable } from 'rxjs/Observable';
import { Search } from './../scenes/vehicle/model/search';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class VehicleRestService {
  constructor(private http: Http) { }

  doSearch(search: Search): Subscribable<Vehicle> {
    return this.http.get('api/veiculo/pesquisar', { search: search });
  }

  doGetMyVehicles() {
    return this.http.get('api/veiculo').map(response => response.json());
  }

  register(vehicle: Vehicle): Subscribable<Object> {
    return this.http.post('api/veiculo', vehicle);
  }

  doDeleteVehicle(vehicle: Vehicle): Subscribable<Object> {
    return this.http.delete(`/api/veiculo/${vehicle.id}`);
  }

}
