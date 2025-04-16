import { motion } from "framer-motion";
import { ParticlesCanvas } from "./ParticlesCanvas";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      <ParticlesCanvas />
      <div className="container max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col space-y-6 md:w-3/4 lg:w-2/3">
          <motion.h4
            className="text-lg md:text-xl font-medium text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ciao, mi chiamo
          </motion.h4>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vito{" "}
            <span className="text-slate-600 dark:text-blue-800">Piccolini</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold text-gray-600 dark:text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sviluppatore IA{" "}
            <span className="text-blue-900 dark:text-blue-800">
              emergente
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg font-montserrat leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Focalizzato su modelli linguistici e sistemi di raccomandazione. Cerco opportunità per applicare le mie competenze in Python, LangChain e NLP a progetti sfidanti. Guarda cosa so fare.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contattami
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              Vedi i miei progetti
            </a>
          </motion.div>

          <motion.div
            className="pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-primary/80 hover:text-primary transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm">Scopri di più</span>
              <ChevronDown className="mt-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
