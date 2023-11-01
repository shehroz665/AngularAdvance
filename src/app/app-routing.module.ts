import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './home/viewhome/viewhome.component';
import { ViewaboutComponent } from './about/viewabout/viewabout.component';
import { ViewComponent } from './products/view/view.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:ViewhomeComponent
  },
  {
    path:'about',component:ViewaboutComponent
  },
  {
    path:'products',component:ViewComponent,
    children:[
      {
        path:'edit',component:EditComponent
      }
    ]
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
