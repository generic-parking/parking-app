import { Component, OnInit } from '@angular/core';
import { VehicleRegisterService } from './vehicle-register.service';
import { Vehicle, Proprietario } from './../model/vehicle';
import { User } from '../../../models/User';

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  providers: [VehicleRegisterService]
})
export class VehicleRegisterComponent implements OnInit {

  constructor(public vehicleService: VehicleRegisterService) { }

  ngOnInit() {
    this.vehicleService.doListMyVehicles();
  }
}
