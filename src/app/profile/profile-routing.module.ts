import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  {
    path:'view',component:ViewprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
