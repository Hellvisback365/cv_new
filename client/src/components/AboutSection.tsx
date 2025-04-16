import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Brain,
  MessageSquare,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Importa l'immagine del profilo
import ImmagineProfiloPng from "@assets/images/Immagine_Profilo.png";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col space-y-4 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-poppins font-bold"
            variants={itemVariants}
          >
            <span className="text-primary">Chi</span> Sono
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary rounded"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
              <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="w-full h-full overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800">
                  <img
                    src={ImmagineProfiloPng}
                    alt="Vito Piccolini - Immagine del profilo"
                    className="max-w-full max-h-full object-contain p-2"
                    style={{ maxHeight: "90%" }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-poppins font-semibold">
                    Vito <span className="text-white-800">Piccolini</span>
                  </h3>
                  <p className="text-primary-200">AI Developer</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="https://github.com/Hellvisback365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vito-p-9120028a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                {/*<a
                  href="https://twitter.com/VitoPiccolini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                >
                  <FaTwitter size={18} />
                </a>*/}
                <a
                  href="mailto:vitopiccolini@live.it"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-poppins font-semibold">
              Sviluppatore IA con passione per l'innovazione
            </h3>
            <p className="leading-relaxed">
              Sviluppatore Al in formazione, con esperienza nella progettazione
              e prototipazione di applicazioni basate su modelli linguistici di
              ultima generazione. <br /> Durante il mio tirocinio accademico ho
              integrato LLM locali (LLaMA, Mistral) in sistemi di
              raccomandazione conversazionale, migliorando le performance
              attraverso tecniche di caching, chaining e prompt tuning.
            </p>
            <p className="leading-relaxed">
              Solide competenze in Python, LangChain, NLP e architettura di
              backend (Node.js, MongoDB). <br /> Cerco un’opportunità per
              contribuire allo sviluppo di soluzioni Al orientate all’utente,
              sfruttando l’ecosistema open-source e le potenzialità dei modelli
              generativi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-poppins font-semibold mb-3 text-primary">
                  Formazione
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <GraduationCap
                      className="mt-1 mr-2 text-primary"
                      size={16}
                    />
                    <span>Università di Bari Aldo Moro, Informatica</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-poppins font-semibold mb-3 text-primary">
                  Interessi
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Brain className="mt-1 mr-2 text-primary" size={16} />
                    <span>Intelligenza Artificiale</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare
                      className="mt-1 mr-2 text-primary"
                      size={16}
                    />
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="mt-1 mr-2 text-primary" size={16} />
                    <span>Privacy e GDPR</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
