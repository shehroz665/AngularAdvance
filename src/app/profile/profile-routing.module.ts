import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { loadAuthGuard } from '../Guard/load-auth.guard';

const routes: Routes = [
  {
    path:'view',component:ViewprofileComponent,canActivate:[loadAuthGuard],data:[1,2,3]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
