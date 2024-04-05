import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FetchEmployeeComponent } from './components/fetch-employee/fetch-employee.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmpInterceptorInterceptor } from './emp-interceptor.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    FetchEmployeeComponent,
    SideNavComponent,
    LayoutComponentComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    GoogleMapsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : EmpInterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
