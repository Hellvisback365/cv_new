import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Il nome deve contenere almeno 2 caratteri" }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido" }),
  subject: z
    .string()
    .min(5, { message: "L'oggetto deve contenere almeno 5 caratteri" }),
  message: z
    .string()
    .min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato",
        description:
          "Grazie per avermi contattato! Ti risponderò il prima possibile.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Errore",
        description:
          error instanceof Error
            ? error.message
            : "Si è verificato un errore durante l'invio del messaggio.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            <span className="text-primary">Contattami</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="max-w-2xl">
            Hai un progetto interessante o vuoi saperne di più sulle mie
            competenze? Contattami!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Il tuo nome"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="La tua email"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Oggetto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Oggetto del messaggio"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Messaggio</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Il tuo messaggio"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending
                      ? "Invio in corso..."
                      : "Invia Messaggio"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-poppins font-semibold mb-6">
                Informazioni di Contatto
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:vitopiccolini@live.it"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      vitopiccolini@live.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Località</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bari, Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Globe />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Sociale</h4>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://github.com/Hellvisback365"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vito-p-9120028a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-poppins font-semibold mb-6">
                  Disponibilità
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Attualmente sono disponibile per collaborazioni full-time e
                  part-time nell'ambito dello sviluppo di intelligenza
                  artificiale e applicazioni web innovative.
                </p>
                <div className="flex items-center space-x-2 text-green-500 dark:text-green-400">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium">
                    Disponibile per nuovi progetti
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
