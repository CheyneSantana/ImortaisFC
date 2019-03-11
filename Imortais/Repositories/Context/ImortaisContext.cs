using Imortais.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Repositories
{
    public class ImortaisContext : DbContext
    {
        public ImortaisContext(DbContextOptions options)
            : base(options) { }

        public DbSet<EventoImortais> eventos { get; set; }
        public DbSet<Elenco> elenco { get; set; }
    }
}
