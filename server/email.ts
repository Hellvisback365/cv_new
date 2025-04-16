import dotenv from 'dotenv';
import Brevo from '@getbrevo/brevo';

dotenv.config();

const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  throw new Error('BREVO_API_KEY environment variable is not set');
}

// Inizializzazione dell'istanza API con la chiave API
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);  // Usa il valore corretto

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `Nuovo messaggio da ${data.name}: ${data.subject}`;
  sendSmtpEmail.htmlContent = `
    <h3>Nuovo messaggio dal form di contatto</h3>
    <p><strong>Nome:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Oggetto:</strong> ${data.subject}</p>
    <p><strong>Messaggio:</strong></p>
    <p>${data.message}</p>
  `;
  sendSmtpEmail.sender = { email: data.email, name: data.name };
  sendSmtpEmail.to = [{ email: process.env.RECIPIENT_EMAIL || '' }];
  sendSmtpEmail.replyTo = { email: data.email, name: data.name };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    throw new Error('Errore nell\'invio dell\'email');
  }
}
