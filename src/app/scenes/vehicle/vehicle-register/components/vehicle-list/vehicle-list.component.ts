import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Vehicle } from './../../../model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  template: `
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Placa</th>
        <th>Modelo</th>
        <th>Cor</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let vehicle of vehicles">
        <th scope="row">{{ vehicle.placa }}</th>
        <td>{{ vehicle.modelo }}</td>
        <td>{{ vehicle.cor }}</td>
        <td>
          <button class="btn btn-default btn-sm" (click)="doEditVehicle.emit(vehicle)">
            <i class="fa fa-edit"></i>Alterar
          </button>
          <button class="btn btn-danger btn-sm" (click)="doDeleteVehicle.emit(vehicle)">
            <i class="fa fa-minus-circle"></i> Remover
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [`
    table {margin-top: 30px;}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListComponent {

  @Input() vehicles: Vehicle[];
  @Output() doDeleteVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
  @Output() doEditVehicle: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor() { }

}
