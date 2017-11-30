import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VehicleRestService } from './../../../rest/vehicle-rest.service';
import { Vehicle } from '../model/vehicle';
import { Search } from '../model/search';


@Injectable()
export class VehicleSearchService {

  private vehicleSearchSource = new BehaviorSubject<Vehicle[]>([]);
  public vehicles$ = this.vehicleSearchSource.asObservable();

  constructor(private vehicleRest: VehicleRestService) { }

  doSearch(search: Search) {
    this.vehicleRest.doSearch(search).subscribe(data =>
      this.vehicleSearchSource.next(data.content)
    );
  }

}
