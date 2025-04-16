import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-3" : "py-4"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <a
          href="#home"
          className="font-poppins font-bold text-2xl text-primary dark:text-primary"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector("#home");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "#home");
            }
          }}
        >
          VP<span className="text-blue-800 dark:text-blue-800">.it</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#about");
              }
            }}
          >
            Chi Sono
          </a>
          <a
            href="#experience"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#experience");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#experience");
              }
            }}
          >
            Esperienze
          </a>
          <a
            href="#projects"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#projects");
              }
            }}
          >
            Progetti
          </a>
          <a
            href="#skills"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#skills");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#skills");
              }
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-primary dark:hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#contact");
              }
            }}
          >
            Contatti
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-300 h-5 w-5" />
            ) : (
              <Moon className="text-gray-700 h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg mx-4 overflow-hidden fixed z-50 left-0 right-0"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              <button
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#about");
                    }
                  }, 100);
                }}
              >
                Chi Sono
              </button>
              <button
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#experience");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#experience");
                    }
                  }, 100);
                }}
              >
                Esperienze
              </button>
              <button
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#projects");
                    }
                  }, 100);
                }}
              >
                Progetti
              </button>
              <button
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#skills");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#skills");
                    }
                  }, 100);
                }}
              >
                Skills
              </button>
              <button
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#contact");
                    }
                  }, 100);
                }}
              >
                Contatti
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
