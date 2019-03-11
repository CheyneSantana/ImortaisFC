using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Imortais.Models;
using Imortais.Repositories;

namespace Imortais.Service
{
    public class BuscarEventosTask
    {
        #region Variables
        private DateTime data;
        public IEnumerable<EventoImortais> eventos;
        private ImortaisContext _context;
        #endregion

        public BuscarEventosTask(DateTime prData, ImortaisContext context)
        {
            data = prData;
            _context = context;
        }

        public void buscar()
        {
            eventos = _context.eventos.Where(w => w.DataEvento.Date.Equals(data.Date));
        }
    }
}
