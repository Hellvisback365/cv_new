import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a
            href="#home"
            className="font-poppins font-bold text-2xl text-primary mb-6 md:mb-0"
          >
            VP<span className="text-blue-800">.it</span>
          </a>

          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:items-center md:space-x-8">
            <div className="flex space-x-6">
              <a
                href="#about"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Chi Sono
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Esperienze
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Progetti
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Contatti
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Hellvisback365"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vito-p-9120028a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Vito{" "}
            <span className="text-slate-500">Piccolini</span>. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};
