import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../../model/vehicle';

@Component({
  selector: 'app-vehicle-search-list',
  templateUrl: './vehicle-search-list.component.html',
  styleUrls: ['./vehicle-search-list.component.scss']
})
export class VehicleSearchListComponent implements OnInit {

  @Input() vehicles: Vehicle;
  constructor() { }

  ngOnInit() {
  }

}
