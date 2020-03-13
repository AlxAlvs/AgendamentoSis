using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repositories
{
    public interface IAgendamentoRepository
    {
        void Add(Agendamento agendamento);
        IEnumerable<Agendamento> GetAll();
        Agendamento Find(Guid id);
        void Remove(Guid id);
        void Update(Agendamento agendamento);
    }
}
