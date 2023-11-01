import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './home/viewhome/viewhome.component';
import { ViewaboutComponent } from './about/viewabout/viewabout.component';
import { ViewComponent } from './products/view/view.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { EditComponent } from './edit/edit.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { deactiveAuthGuard } from './Guard/deactive-auth.guard';
import { loadAuthGuard } from './Guard/load-auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:ViewhomeComponent,canActivate:[authGuardGuard]
  },
  {
    path:'about',component:ViewaboutComponent,canActivate:[authGuardGuard]
  },
  {
    path:'products',component:ViewComponent,
    children:[
      {
        path:'edit',component:EditComponent,canActivate:[authGuardGuard],canDeactivate:[deactiveAuthGuard]
      }
    ]
  },
  {
    path:'profile',loadChildren: ()=>import('./profile/profile.module').then((mod)=>mod.ProfileModule)
  },
  {
    path:'access-denied',component:AccessDeniedComponent
  },
  {
    path:'**',component:NopageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
