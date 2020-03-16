import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoFormComponent } from './agendamentos/agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './agendamentos/agendamento-list/agendamento-list.component';


const routes: Routes = [
  {path: '', component: AgendamentoFormComponent},
  {path: 'agendamentos', component: AgendamentoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
