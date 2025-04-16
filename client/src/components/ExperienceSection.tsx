import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const timelineItems: TimelineItem[] = [
  {
    period: "Marzo 2025 - Giugno 2025",
    title: "Sviluppatore IA",
    company: "LACAM-SWAP, Università di Bari",
    description:
      "Progetto di tesi: Sistema di Raccomandazione Conversazionale Integrato con LLM\n" +
      "• Prototipazione in Python di modelli LLM locali (LLaMA, Mistral) tramite Hugging Face Transformers\n" +
      "• Orchestrazione multi-modello con LangChain (LLMChain, ChatOpenAI) e integrazione via OpenRouter API\n" +
      "• Sperimentazione modelli API (llama-4, mistral) per aumentare la diversità e robustezza delle risposte\n" +
      "• Ottimizzazione del prompt engineering e implementazione di esecuzione asincrona con caching",
    tags: [
      "LLaMA",
      "Mistral",
      "LangChain",
      "Python",
      "NLP",
      "Hugging Face Transformers",
      "API",
      "Prompt engineering ",
      "Prompt tuning",
      "Caching",
    ],
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-black"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            <span className="text-primary">Esperienze</span> Professionali
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="max-w-2xl">
            Il mio percorso professionale nell'ambito dello sviluppo di
            intelligenza artificiale e applicazioni innovative.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-[-0.5px] ml-[19px] md:ml-0"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative ml-10 md:ml-0 md:w-1/2 text-right ${
                  index % 2 === 0
                    ? "md:pr-12 md:self-end"
                    : "md:pl-12 md:ml-auto"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 left-[-30px] md:top-3 ${
                    index % 2 === 0
                      ? "md:right-[-8px] md:left-auto"
                      : "md:left-[-8px]"
                  } w-4 h-4 rounded-full bg-primary z-10`}
                />

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-poppins font-semibold mt-2 text-primary">
                    {item.title}
                  </h3>
                  <h4 className="font-medium mt-1 text-gray-700 dark:text-gray-300">
                    {item.company}
                  </h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 whitespace-pre-line text-left">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-primary-50 dark:bg-primary/20 text-primary border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
