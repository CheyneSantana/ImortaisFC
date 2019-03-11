using Imortais.Models;
using Imortais.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class ElencoService
    {
        private ImortaisContext _context;
        public IEnumerable<Elenco> elenco;

        public ElencoService(ImortaisContext context)
        {
            _context = context;
        }

        public void BuscarElenco()
        {
            BuscarElencoTask buscarElencoTask = new BuscarElencoTask(this._context);
            buscarElencoTask.buscar();

            this.elenco = buscarElencoTask.elenco;
        }
    }
}
