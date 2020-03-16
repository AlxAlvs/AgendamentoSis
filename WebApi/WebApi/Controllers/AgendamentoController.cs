using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/agendamentos")]
    public class AgendamentoController : Controller
    {
        private readonly IAgendamentoRepository _agendamentoRepository;

        public AgendamentoController(IAgendamentoRepository agendamentoRepo)
        {
            _agendamentoRepository = agendamentoRepo;
        }

        [HttpGet]
        public IEnumerable<Agendamento> GetAll()
        {
            return _agendamentoRepository.GetAll();
        }

        [HttpPost]
        public IActionResult Create([FromBody] Agendamento agendamento)
        {
            if (agendamento == null)
                return BadRequest();

            agendamento.AgendamentoId = Guid.NewGuid();
            _agendamentoRepository.Add(agendamento);

            return Ok();
        }
    }
}
