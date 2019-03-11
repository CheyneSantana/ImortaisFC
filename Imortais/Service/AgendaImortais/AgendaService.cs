using Imortais.Models;
using Imortais.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class AgendaService
    {
        private ImortaisContext _context;
        public IEnumerable<EventoImortais> eventos;

        public AgendaService(ImortaisContext context)
        {
            _context = context;
        }

        public void BuscarEventos(DateTime prData)
        {
            BuscarEventosTask buscarEventosTask = new BuscarEventosTask(prData, this._context);
            buscarEventosTask.buscar();
            this.eventos = buscarEventosTask.eventos;
        }

        public void EnviarEmail(EnviarEmail prEnviarEmail)
        {
            EnviarEmailTask enviarEmailTask = new EnviarEmailTask(prEnviarEmail);
            enviarEmailTask.enviar();
        }
    }
}
