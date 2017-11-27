import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';

const routes = [
  { path: '', component: VehicleSearchComponent },
  { path: 'register', component: VehicleRegisterComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule { }
