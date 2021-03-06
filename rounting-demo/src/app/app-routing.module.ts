import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path: 'departments',component: DepartmentListComponent},
  {path: 'departments/:id',component: DepartmentDetailsComponent,
children:[
  {
    path:'overview',component:DepartmentOverviewComponent
  },
  {
    path:'contact',component:DepartmentContactComponent
  }
]},
  {path: 'employees',component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}  //should be last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [DepartmentListComponent,DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentContactComponent,DepartmentOverviewComponent]
