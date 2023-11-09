import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { EditComponent } from './edit/edit.component';
import { ProfileModule } from './profile/profile.module';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ChildnewComponent } from './childnew/childnew.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MultiformsComponent } from './multiforms/multiforms.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessDeniedComponent,
    NopageFoundComponent,
    EditComponent,
    ChildComponent,
    ChildnewComponent,
    MultiformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProductsModule,
    NgbModule,
    ProfileModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,MatInputModule,MatFormFieldModule,MatStepperModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
