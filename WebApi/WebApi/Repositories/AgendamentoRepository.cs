using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class AgendamentoRepository : IAgendamentoRepository
    {
        private readonly AgendamentoContext _contexto;

        public AgendamentoRepository(AgendamentoContext ctx)
        {
            _contexto = ctx;
        }

        public void Add(Agendamento agendamento)
        {
            _contexto.Agendamento.Add(agendamento);
            _contexto.SaveChanges();
        }

        public Agendamento Find(Guid id)
        {
            return _contexto.Agendamento.FirstOrDefault(u => u.AgendamentoId == id);
        }

        public IEnumerable<Agendamento> GetAll()
        {
            return _contexto.Agendamento.ToList();
        }

        public void Remove(Guid id)
        {
            var agendamento = _contexto.Agendamento.FirstOrDefault(u => u.AgendamentoId == id);
            _contexto.Agendamento.Remove(agendamento);
            _contexto.SaveChanges();
        }

        public void Update(Agendamento agendamento)
        {
            _contexto.Agendamento.Update(agendamento);
            _contexto.SaveChanges();
        }
    }
}
