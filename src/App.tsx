import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VibeCoder from "@/components/sections/VibeCoder";
import Skills from "@/components/sections/Skills";
import AIToolsBelt from "@/components/sections/AIToolsBelt";
import Projects from "@/components/sections/Projects";
import Freelance from "@/components/sections/Freelance";
import Certifications from "@/components/sections/Certifications";
import Finance from "@/components/sections/Finance";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import AsciiCursor from "@/components/ui/AsciiCursor";

export default function App() {
  return (
    <div className="dark transition-colors duration-500 min-h-screen selection:bg-primary/30 selection:text-primary">
      <TooltipProvider>
        <AsciiCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <VibeCoder />
          <Skills />
          <AIToolsBelt />
          <Projects />
          <Freelance />
          <Certifications />
          <Finance />
          <Contact />
        </main>

        <Footer />
      </TooltipProvider>
    </div>
  );
}
