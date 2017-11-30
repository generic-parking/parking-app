import { Vehicle } from './../../../model/vehicle';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-register-form',
  templateUrl: './vehicle-register-form.component.html',
  styleUrls: ['./vehicle-register-form.component.scss']
})
export class VehicleRegisterFormComponent implements OnChanges {

  @Output() doVehicleSaveEvent: EventEmitter<Vehicle> = new EventEmitter<Vehicle>()
  @Input() vehicle: Vehicle = new Vehicle();

  formVehicle: FormGroup;
  isRegisterOpen = false;
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
    this.createFormBuilder();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.vehicle.currentValue) {
      this.isRegisterOpen = true;
      this.createFormBuilder();
    }
  }

  createFormBuilder() {
    this.formVehicle = this.formBuilder.group({
      'id': [this.vehicle.id],
      'cor': [this.vehicle.cor, Validators.required],
      'modelo': [this.vehicle.modelo, Validators.required],
      'placa': [this.vehicle.placa, Validators.required],
    });
  }

  closeRegister() {
    this.formVehicle.reset();
    this.isRegisterOpen = false;
  }

  openRegister() {
    this.isRegisterOpen = true;
  }

  doSave(vehicle: Vehicle) {
    if (this.formVehicle.valid) {
      this.doVehicleSaveEvent.emit(vehicle);
      this.closeRegister();
    }
  }
}
