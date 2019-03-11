using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Imortais.Service;
using Imortais.Models;
using Imortais.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Imortais.Controllers
{
    [Route("api/[controller]")]
    public class AgendaImortaisController : Controller
    {
        private readonly ImortaisContext _context;
        public AgendaImortaisController(ImortaisContext context)
        {
            _context = context;
        }

        // GET: api/AgendaImortais/
        [HttpGet("[action]")]
        public IActionResult GetEventos([FromHeader] EventoImortais evento)
        {
            try
            {
                AgendaService agendaService = new AgendaService(this._context);
                agendaService.BuscarEventos(evento.DataEvento);
                return Json(agendaService.eventos);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/AgendaImortais/EnviarEmail
        [HttpPost("[action]")]
        public IActionResult EnviarEmail([FromBody] EnviarEmail value)
        {
            try
            {
                AgendaService agendaService = new AgendaService(this._context);
                agendaService.EnviarEmail(value);

                return Json("Enviado com sucesso!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
