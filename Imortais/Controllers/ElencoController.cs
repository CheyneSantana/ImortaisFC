using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Imortais.Repositories;
using Imortais.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Imortais.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElencoController : Controller
    {
        private readonly ImortaisContext _context;

        public ElencoController(ImortaisContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IActionResult buscarElenco()
        {
            try
            {
                ElencoService elencoService = new ElencoService(this._context);
                elencoService.BuscarElenco();

                return Json(elencoService.elenco);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
