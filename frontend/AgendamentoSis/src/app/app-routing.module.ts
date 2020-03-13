import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoFormComponent } from './agendamentos/agendamento-form/agendamento-form.component';


const routes: Routes = [
  {path: '', component: AgendamentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
