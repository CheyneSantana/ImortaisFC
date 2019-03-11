using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Models
{
    public class EnviarEmail
    {
        [Key]
        public int id { get; set; }
        public string representante { get; set; }
        public string nomeTime { get; set; }
        public string emailRepresentante { get; set; }
        public string telefoneRepresentante { get; set; }
        public string dataContra { get; set; }
    }
}
