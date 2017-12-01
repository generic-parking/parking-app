import { Filter } from './../../../models/Filter';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VehicleRestService } from './../../../rest/vehicle-rest.service';
import { Vehicle } from '../model/vehicle';
import { Search } from '../model/search';

@Injectable()
export class VehicleSearchService {

  private vehicleSearchSource = new BehaviorSubject<Vehicle[]>([]);
  public vehicles$ = this.vehicleSearchSource.asObservable();

  private filterSource = new BehaviorSubject<Filter>(null);
  public filter$ = this.filterSource.asObservable();

  constructor(private vehicleRest: VehicleRestService) { }

  doSearch(search: Search) {
    this.vehicleRest.doSearch(search).subscribe(data => {
      this.filterSource.next(new Filter(data, search));
      this.vehicleSearchSource.next(data.content);
    }
    );
  }

}
