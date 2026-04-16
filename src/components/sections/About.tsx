import { motion } from "motion/react";
import TerminalCard from "@/components/ui/TerminalCard";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            // ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Hey, I'm Lohith<span className="text-amber-primary">.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
            <p>
              Eighteen. First-year B.E. CSE at Coimbatore.
              I build things that solve my own problems first.
            </p>
            <p>
              Started with a car racing game in the terminal.
              Now I'm running WhatsApp bots, food ordering apps,
              and a personal AI assistant called Cyrus.
            </p>
            <p>
              I don't wait to know everything before I start.
              I <span className="text-amber-primary font-bold">vibe-code</span>. 
              I ship. I learn on the way.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <TerminalCard
          title="lohith.exe"
          lines={[
            "$ lohith --info",
            "",
            "Name     : Lohith",
            "Age      : 18",
            "OS       : Windows 11 (ASUS F16)",
            "Location : Coimbatore, Tamil Nadu",
            "Status   : Building",
            "College  : B.E. CSE, Year 1",
            "GitHub   : @Lohith848",
            "Domain   : lohva.in",
            "",
            "> currently_learning: AI Certs",
            "> open_to: Freelance + Collab"
          ]}
        />
      </div>
    </section>
  );
}
