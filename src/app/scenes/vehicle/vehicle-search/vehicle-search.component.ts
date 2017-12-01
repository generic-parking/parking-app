import { Component } from '@angular/core';
import { VehicleSearchService } from './vehicle-search.service';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  providers: [VehicleSearchService]
})
export class VehicleSearchComponent {

  constructor(public vehicleSearch: VehicleSearchService) { }

}
