import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { FormsModule } from '@angular/forms';
import { CarreraFormComponent } from './carrera/form/carrera.form.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { CarreraListComponent } from './carrera/list/carrera-list.component';
import { CarreraToolbarComponent } from './carrera/toolbar/carrera-toolbar.component';
import { UsuarioComboboxComponent } from './usuario/usuario-combobox.component';
import { UsuarioSearchComponent } from './usuario/usuario-search/usuario-search.component';

@NgModule({
  declarations: [
    CarreraFormComponent,
    TicketComponent,
    UsuarioComponent,
    RespuestaComponent,
    CarreraListComponent,
    CarreraToolbarComponent,
    UsuarioComboboxComponent,
    UsuarioSearchComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, FormsModule],
})
export class FeaturesModule {}
