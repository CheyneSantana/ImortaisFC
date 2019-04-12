using Imortais.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Imortais.Service
{
    public class EnviarEmailTask
    {
        private EnviarEmail enviarEmail;
        public EnviarEmailTask(EnviarEmail prEnviarEmail)
        {
            this.enviarEmail = prEnviarEmail;
        }

        public void enviar()
        {
            MailMessage mailMessage = new MailMessage("cheyne.santana@gmail.com", "cheyne.santana@gmail.com");
            mailMessage.Body = montarBody();
            mailMessage.Subject = "Agendamento de Contra";

            using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
            {
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("cheyne.santana@gmail.com", "B4tm4n2017//");

                client.Send(mailMessage);
            }
        }

        private string montarBody()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("O time " + this.enviarEmail.nomeTime + " deseja marcar um contra para o dia " + this.enviarEmail.dataContra.Day + "/" + this.enviarEmail.dataContra.Month + "/" + this.enviarEmail.dataContra.Year);
            sb.AppendLine("Entrar em contato com o representante " + this.enviarEmail.representante + " no telefone: " + this.enviarEmail.telefoneRepresentante);
            sb.AppendLine("Ou pelo email: " + this.enviarEmail.emailRepresentante);

            return sb.ToString();
        }
    }
}
