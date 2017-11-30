import { UserRestService } from './../../rest/user-rest.service';
import { VehicleRestService } from './../../rest/vehicle-rest.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { ComponentsModule } from '../../components/components.module';
import { FilterBarComponent } from './vehicle-search/components/filter-bar/filter-bar.component';
import { VehicleRegisterFormComponent } from './vehicle-register/components/vehicle-register-form/vehicle-register-form.component';
import { VehicleListComponent } from './vehicle-register/components/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    VehicleRegisterComponent,
    VehicleSearchComponent,
    FilterBarComponent,
    VehicleRegisterFormComponent,
    VehicleListComponent
  ],
  providers: [
    VehicleRestService,
    UserRestService,
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    NgReduxModule,
    ReactiveFormsModule,
  ],
})
export class VehicleModule { }
