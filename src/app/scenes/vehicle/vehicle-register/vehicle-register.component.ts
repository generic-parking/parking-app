import { UserRestService } from './../../../rest/user-rest.service';
import { Vehicle, Proprietario } from './../model/vehicle';
import { Component } from '@angular/core';
import { User } from '../../../models/User';
import { VehicleRestService } from '../../../rest/vehicle-rest.service';

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  providers: [
    UserRestService,
    VehicleRestService
  ],
})
export class VehicleRegisterComponent {

  constructor(
    private userRestService: UserRestService,
    private vehicleRestService: VehicleRestService) { }

  doSaveVehicle(vehicle: Vehicle) {
    this.userRestService.getUser().subscribe((user: User) => {
      vehicle.proprietario = new Proprietario();
      vehicle.proprietario.id = user.id;

      this.vehicleRestService.register(vehicle).subscribe(() => {
        // TODO emite evento para listar carros
        console.log('??');
      });
    });
  }
}
