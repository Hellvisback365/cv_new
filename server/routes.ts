import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);
      
      // Store contact form submission
      const result = await storage.saveContactMessage(contactData);

      // Send email
      try {
        await sendContactEmail(contactData);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        return res.status(500).json({
          success: false,
          message: 'Errore nell\'invio dell\'email'
        });
      }
      
      return res.status(200).json({ 
        success: true, 
        message: 'Contact message received',
        id: result.id
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
