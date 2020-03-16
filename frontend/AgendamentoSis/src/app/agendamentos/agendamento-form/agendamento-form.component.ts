import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import Agendamento from 'src/app/models/Agendamento';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  formulario:FormGroup;
  agendamentos:Agendamento [] = [];

  constructor(private formBuilder: FormBuilder,
              private service: AgendamentoService,
              private router : Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo:[null, Validators.required],
      sala:[null, Validators.required],
      horaInicio:[null, Validators.required],
      horaTermino:[null, Validators.required]
    });
  }

  criar() {
    let agendamento : Agendamento = Object.assign({}, this.formulario.value);

    if (this.formulario.invalid) {
      alert("existem campos inválidos");
      return;
    }

    this.service
      .buscarTodos()
      .subscribe(agendamentos=>{this.agendamentos = agendamentos;

        if(this.agendamentos
               .some(x => x.sala == agendamento.sala &&
                    ((agendamento.horaInicio >= x.horaInicio && agendamento.horaInicio < x.horaTermino) ||
                    (agendamento.horaInicio <= x.horaInicio && agendamento.horaTermino > x.horaInicio))))
        {
          alert("já existe um agendamento para esta hora de início e hora de término ("
                +agendamento.horaInicio +" "+ agendamento.horaTermino +")");
          return;
        }

        //incluir dados
          this.service.criar(agendamento)
          .subscribe(agendamento=> this.OnSaveSucess()),
          error => console.error(error);        
      })   
  }

  OnSaveSucess(){   
    alert("Cadastrado com successo.");
    this.router.navigate(["/agendamentos"]);
  }
}
