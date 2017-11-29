import { Vehicle } from './../../../model/vehicle';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-register-form',
  templateUrl: './vehicle-register-form.component.html',
  styleUrls: ['./vehicle-register-form.component.scss']
})
export class VehicleRegisterFormComponent {

  @Output() doVehicleSaveEvent: EventEmitter<Vehicle> = new EventEmitter<Vehicle>()
  @Input() vehicle: Vehicle = new Vehicle();

  formVehicle: FormGroup;
  isRegisterOpen: boolean = false;
  colors: string[] = [
    'Amarelo',
    'Azul',
    'Bege',
    'Bordô',
    'Branco',
    'Champagne',
    'Cinza',
    'Dourado',
    'Grafite',
    'Laranja',
    'Marrom',
    'Ouro',
    'Prata',
    'Preto',
    'Rosa',
    'Roxo',
    'Verde',
    'Vermelho'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formVehicle = formBuilder.group({
      'cor': [this.vehicle.cor, Validators.required],
      'modelo': [this.vehicle.modelo, Validators.required],
      'placa': [this.vehicle.placa, Validators.required],
    });
  }

  openRegister() {
    this.isRegisterOpen = !this.isRegisterOpen;
  }

  doSave(vehicle: Vehicle) {
    if (this.formVehicle.valid) {
      this.isRegisterOpen = false;
      this.doVehicleSaveEvent.emit(vehicle);
    }
  }
}
