using System;

namespace WebApi.Models
{
    public class Agendamento
    {
        public Guid AgendamentoId { get; set; }
        public string Titulo { get; set; }
        public string Sala { get; set; }
        public DateTime HoraInicio { get; set; }
        public DateTime HoraTermino { get; set; }

        public Agendamento(string titulo, string sala, DateTime horaInicio, DateTime horaTermino)
        {
            AgendamentoId = Guid.NewGuid();
            Titulo = titulo;
            Sala = sala;
            HoraInicio = horaInicio;
            HoraTermino = horaTermino;
        }

        public Agendamento()
        {

        }
    }
}
