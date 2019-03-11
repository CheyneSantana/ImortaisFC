using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Models
{
    public class EventoImortais
    {
        [Key]
        public int EventoID { get; set; }
        public string DescricaoEvento { get; set; }
        public DateTime DataEvento { get; set; }
    }
}
