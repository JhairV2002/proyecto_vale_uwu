import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from '../features/carrera/form/carrera.form.component';
import { CarreraListComponent } from '../features/carrera/list/carrera-list.component';
import { TicketComponent } from '../features/ticket/ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path:'carrera-form',component:CarreraFormComponent},
      {path:'carrera-form/:id',component:CarreraFormComponent},
      {path:'carrera-list',component:CarreraListComponent},
      {path:'tiket',component:TicketComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
