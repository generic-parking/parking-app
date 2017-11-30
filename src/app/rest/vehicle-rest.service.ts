import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subscribable } from 'rxjs/Observable';

import { Vehicle } from './../scenes/vehicle/model/vehicle';
import { Search } from './../scenes/vehicle/model/search';

@Injectable()
export class VehicleRestService {
  constructor(private http: Http) { }

  doSearch(search: Search): Subscribable<Object> {
    return this.http.get('api/veiculo/pesquisar', { search: search }).map(response => response.json());
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
