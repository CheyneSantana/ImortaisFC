using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Imortais.Models
{
    public class Elenco
    {
        [Key]
        public int elencoId { get; set; }
        [Required]
        public string nome { get; set; }
        [Required]
        public string posicao { get; set; }
        [Required]
        public string img { get; set; }
        [Required]
        public int gols { get; set; }
        [Required]
        public int assistencias { get; set; }
        [Required]
        public DateTime dtContratacao { get; set; }
        [Required]
        public int cv { get; set; }
        [Required]
        public int ca { get; set; }
        [Required]
        public int ativo { get; set; }

        public enum KdAtivo
        {
            sim = 0,
            nao = 1
        }
    }
}
