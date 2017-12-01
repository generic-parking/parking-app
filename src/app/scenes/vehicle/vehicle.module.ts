import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';

import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { VehicleRegisterFormComponent } from './vehicle-register/components/vehicle-register-form/vehicle-register-form.component';
import { VehicleListComponent } from './vehicle-register/components/vehicle-list/vehicle-list.component';

import { ComponentsModule } from '../../components/components.module';
import { UserRestService } from './../../rest/user-rest.service';
import { VehicleRestService } from './../../rest/vehicle-rest.service';

import { VehicleSearchListComponent } from './vehicle-search/components/vehicle-search-list/vehicle-search-list.component';
import { FilterBarComponent } from './vehicle-search/components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    VehicleRegisterComponent,
    VehicleSearchComponent,
    VehicleRegisterFormComponent,
    VehicleListComponent,
    FilterBarComponent,
    VehicleSearchListComponent,
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
