import { VehicleRestService } from './../../../rest/vehicle-rest.service';
import { Component } from '@angular/core';
import { Search } from '../model/search';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  providers: [VehicleRestService],
})
export class VehicleSearchComponent {
  constructor(private vehicleRest: VehicleRestService) { }

  doSearch(search: Search) {
    this.vehicleRest.doSearch(search).subscribe(console.log);
  }
}
