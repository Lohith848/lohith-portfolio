import { motion } from "motion/react";
import { Cpu, Zap, Box, MessageSquare, Terminal, Eye } from "lucide-react";

interface Tool {
  name: string;
  role: string;
  desc: string;
  icon: any;
}

import SpotlightCard from "@/components/ui/SpotlightCard";

const tools: Tool[] = [
  {
    name: "Claude",
    role: "Architect",
    desc: "Complex logic, code review, PRD writing.",
    icon: MessageSquare,
  },
  {
    name: "Cursor",
    role: "Driver",
    desc: "Daily driver IDE for all production code.",
    icon: Terminal,
  },
  {
    name: "OpenAI",
    role: "Research",
    desc: "A chatbot for  daily quest.",
    icon: Box,
  },
  {
    name: "Groq",
    role: "Inference",
    desc: "Fast LLM calls for Cyrus & morning bots.",
    icon: Zap,
  },
  {
    name: "Ollama",
    role: "Local Compute",
    desc: "Privacy-first offline models (Llama 3).",
    icon: Cpu,
  },
  {
    name: "Gemini",
    role: "Vision",
    desc: "Visual analysis and asset generation.",
    icon: Eye,
  },
];

export default function AIToolsBelt() {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto mb-16 flex flex-col items-center">
        <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
          // TOOLBELT
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">
          The AI Arsenal<span className="text-amber-primary">.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 px-6 overflow-x-auto no-scrollbar pb-8 snap-x">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80 snap-center"
            >
              <SpotlightCard className="h-full p-8 border-2 border-border bg-card shadow-lg hover:border-amber-primary/50 group transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-muted rounded-none text-amber-primary">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest opacity-40">
                    {">"} tool: {tool.name.toLowerCase()}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 relative z-20">
                  {tool.name}
                </h3>
                <p className="text-amber-primary font-accent text-xs uppercase tracking-widest font-bold mb-4 relative z-20">
                  {tool.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-20">
                  {tool.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
