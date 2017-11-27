import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: 'profile', loadChildren: './scenes/user/user.module#UserModule' },
  { path: 'vehicle', loadChildren: './scenes/vehicle/vehicle.module#VehicleModule' },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
