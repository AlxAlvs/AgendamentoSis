using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class AgendamentoContext : DbContext
    {
        public DbSet<Agendamento> Agendamento { get; set; }

        public AgendamentoContext(DbContextOptions<AgendamentoContext> options)
            : base (options)
        {
                
        }
    }
}
