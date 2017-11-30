import { Injectable } from '@angular/core';

import { Vehicle, Proprietario } from './../model/vehicle';
import { User } from '../../../models/User';
import { Search } from '../model/search';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { UserRestService } from './../../../rest/user-rest.service';
import { VehicleRestService } from '../../../rest/vehicle-rest.service';

@Injectable()
export class VehicleRegisterService {

  private vehicleRegisterSource = new BehaviorSubject<Vehicle[]>(null);
  public vehicles$ = this.vehicleRegisterSource.asObservable();

  private vehicleDetailSource = new BehaviorSubject<Vehicle>(null);
  public vehicle$ = this.vehicleDetailSource.asObservable();

  constructor(
    private userRestService: UserRestService,
    private vehicleRestService: VehicleRestService,
  ) { }

  doRegisterVehicle(vehicle: Vehicle) {
    this.userRestService.getUser().subscribe((user: User) => {
      vehicle.proprietario = new Proprietario();
      vehicle.proprietario.id = user.id;

      this.vehicleRestService.register(vehicle).subscribe(() => {
        this.doListMyVehicles();
      });
    });
  }

  doEditVehicle(vehicle: Vehicle) {
    this.vehicleDetailSource.next(vehicle);
  }

  doListMyVehicles() {
    this.vehicleRestService.doGetMyVehicles().subscribe(vehicles => {
      this.vehicleRegisterSource.next(vehicles.content);
    });
  }

  doDeleteVehicle(vehicle: Vehicle) {
    this.vehicleRestService.doDeleteVehicle(vehicle).subscribe(data => {
      this.doListMyVehicles();
    });
  }
}
