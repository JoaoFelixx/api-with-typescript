import { MessageInterface, SendEmailInterface } from "../SendEmailInterface";

export class MailProvider implements SendEmailInterface{
  constructor () {}
  async sendEmail(message: MessageInterface): Promise<void> {
    await console.log('Mensagem enviada');
  }
}