import { Component, OnInit } from '@angular/core';
import Agendamento from 'src/app/models/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent implements OnInit {

  agendamentos:Agendamento [] = [];

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit() {
    this.carregarCalendarios();
  }

  carregarCalendarios(){
    this.agendamentoService
      .buscarTodos()
      .subscribe(agendamentos=>{
        this.agendamentos = agendamentos;
    })
  }
}
