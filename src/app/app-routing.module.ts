import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchEmployeeComponent } from './components/fetch-employee/fetch-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component'
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'home',
    component : LayoutComponentComponent,
    children : [
      {
        path : '', pathMatch : 'full', redirectTo : 'addEmployee'
      },
      {
        path : 'addEmployee', component : AddEmployeeComponent
      },
      {
        path : 'fetchEmployee', component : FetchEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
