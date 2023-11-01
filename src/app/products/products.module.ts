import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
