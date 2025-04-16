import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Bot, ShieldAlert, Code, Wrench, Database, Languages } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Intelligenza Artificiale",
    icon: <Bot className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "Python", percentage: 80 },
      { name: "LangChain", percentage: 80 },
      { name: "NLP", percentage: 80 },
      { name: "LLMs", percentage: 80 },
      { name: "Prompt Engineering", percentage: 90 },
      { name: "Hugging Face Transformers", percentage: 80 },
      { name: "API", percentage: 90 },
      { name: "Prompt Tuning", percentage: 90 },
      { name: "Caching", percentage: 80 },
      { name: "TensorFlow", percentage: 40 },
      { name: "Raccomandazione Conversazionale", percentage: 80 },
      { name: "PyTorch", percentage: 80 },
      { name: "Scikit-learn,", percentage: 40 },
    ],
  },
  {
    name: "Sicurezza e Privacy",
    icon: <ShieldAlert className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "GDPR Compliance", percentage: 80 },
      { name: "Data Protection", percentage: 70 },
    ],
  },
  {
    name: "Sviluppo Web / Software",
    icon: <Code className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "Node.js", percentage: 80 },
      { name: "MongoDB", percentage: 80 },
      { name: "React", percentage: 80 },
      { name: "API ", percentage: 80 },
      { name: "JavaScript", percentage: 80 },
      { name: "CSS", percentage: 80 },
      { name: "Express.js", percentage: 80 },
      { name: "Java", percentage: 80 },
      { name: "C#", percentage: 80 },
      { name: "Vite", percentage: 80 },
      { name: "HTML", percentage: 80 },
    ],
  },
  {
    name: "Strumenti e Metodologie",
    icon: <Wrench className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "Git/GitHub", percentage: 90 },
      { name: "Agile/Scrum", percentage: 70 },
      { name: "Postman", percentage: 60 },
    ],
  },
  {
    name: "Database e Backend:",
    icon: <Database className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "MySQL", percentage: 80 },
      { name: "MongoDB ", percentage: 80 },
      { name: "SQL", percentage: 80 },
      { name: "NoSQL. ", percentage: 80 },
    ],
  },

  {
    name: "Lingue:",
    icon: <Languages className="mr-3 text-primary" />,
    color: "bg-primary",
    skills: [
      { name: "Inglese", percentage: 40 },
      { name: "Italiano", percentage: 100 },
    ],
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Delay skill bar animation slightly
      const timer = setTimeout(() => {
        setAnimateSkills(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="skills"
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
            <span className="text-primary">Competenze</span> Tecniche
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="max-w-2xl">
            Le mie competenze tecniche nelle aree dell'IA, sviluppo web e
            tecnologie correlate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={categoryIndex >= 2 ? "md:col-span-1" : ""}
            >
              <h3 className="text-xl font-poppins font-semibold mb-6 flex items-center">
                {category.icon}
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{
                          width: animateSkills ? `${skill.percentage}%` : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 0.1 * skillIndex,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
