declare module '@getbrevo/brevo' {
  export class TransactionalEmailsApi {
    sendTransacEmail(email: any): Promise<any>; // Modifica il tipo "any" se hai informazioni più precise.
    setApiKey(key: string, value: string): void;
  }

  export const TransactionalEmailsApiApiKeys: {
    apiKey: string;
  };
}
