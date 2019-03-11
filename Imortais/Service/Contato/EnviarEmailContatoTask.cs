using Imortais.Models;
using Imortais.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class EnviarEmailContatoTask
    {
        #region Variables
        private ContatoEmail contatoEmail;
        private ImortaisContext _context;
        #endregion
        public EnviarEmailContatoTask(ContatoEmail prContatoEmail, ImortaisContext context)
        {
            this.contatoEmail = prContatoEmail;
            this._context = context;
        }

        private string montarBody()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(this.contatoEmail.comentarioContato);
            sb.AppendLine();
            sb.AppendLine();
            sb.AppendLine("Enviado por: " + this.contatoEmail.nomeContato);
            sb.AppendLine("Telefone: " + this.contatoEmail.telefoneContato + " email: " + this.contatoEmail.emailContato);


            return sb.ToString();
        }

        private void send()
        {
            MailMessage mailMessage = new MailMessage("cheyne.santana@gmail.com", "cheyne.santana@gmail.com");
            mailMessage.Body = montarBody();
            mailMessage.Subject = this.contatoEmail.assuntoContato;

            using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
            {
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("cheyne.santana@gmail.com", "B4tm4n2017//");

                client.Send(mailMessage);
            }
        }

        public void enviar()
        {
            send();
        }
    }
}
