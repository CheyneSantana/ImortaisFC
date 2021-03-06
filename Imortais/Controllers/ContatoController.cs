﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Imortais.Models;
using Imortais.Repositories;
using Imortais.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Imortais.Controllers
{
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly ImortaisContext _context;

        public ContatoController(ImortaisContext context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public IActionResult EnviarEmail([FromBody] ContatoEmail contatoEmail)
        {
            try
            {
                ContatoService contatoService = new ContatoService(this._context);
                contatoService.EnviarEmail(contatoEmail);

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
