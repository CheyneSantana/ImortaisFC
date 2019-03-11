using Imortais.Models;
using Imortais.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class BuscarElencoTask
    {
        private ImortaisContext _context;
        public IEnumerable<Elenco> elenco;

        public BuscarElencoTask(ImortaisContext context)
        {
            _context = context;
        }

        private void find()
        {
            this.elenco = this._context.elenco.Where(w => w.ativo == (int)Elenco.KdAtivo.sim);
        }

        public void buscar()
        {
            this.find();
        }
    }
}
