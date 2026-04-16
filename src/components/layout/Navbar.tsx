import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Terminal, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isTerminal) {
      document.documentElement.classList.add("terminal");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("terminal");
    }
  }, [isTerminal]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-heading font-bold flex items-center gap-1 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span>Lohith G</span>
          <span className="text-amber-primary group-hover:animate-pulse">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-amber-primary transition-colors uppercase tracking-widest font-accent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={() => setIsTerminal(!isTerminal)}
              className="p-2 hover:bg-accent rounded-none border border-transparent hover:border-primary transition-all flex items-center gap-2"
              title={isTerminal ? "Switch to Standard Mode" : "Switch to Terminal Mode"}
            >
              {isTerminal ? <Zap className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
              <span className="text-[10px] font-mono tracking-tighter uppercase font-bold">
                {isTerminal ? "STD" : "TRM"}
              </span>
            </button>
            <a
              href="https://github.com/Lohith848"
              target="_blank"
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsTerminal(!isTerminal)}
            className="p-2 hover:bg-accent border border-transparent hover:border-primary transition-all flex items-center gap-2"
          >
            {isTerminal ? <Zap className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold uppercase tracking-widest font-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t">
                <a href="https://github.com/Lohith848" target="_blank">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/lohithbuilds/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
