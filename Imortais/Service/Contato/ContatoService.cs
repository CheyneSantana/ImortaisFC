using Imortais.Models;
using Imortais.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class ContatoService
    {
        private ImortaisContext _context;

        public ContatoService(ImortaisContext context)
        {
            _context = context;
        }

        public void EnviarEmail(ContatoEmail prContatoEmail)
        {
            EnviarEmailContatoTask enviarEmailContatoTask = new EnviarEmailContatoTask(prContatoEmail, this._context);
            enviarEmailContatoTask.enviar();
        }
    }
}
