import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import SpotlightCard from "@/components/ui/SpotlightCard";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "Arduino C++"],
  },
  {
    title: "Frontend",
    skills: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    title: "Backend & DB",
    skills: ["Supabase", "PostgreSQL", "REST APIs", "OAuth 2.0"],
  },
  {
    title: "AI & Automation",
    skills: ["Claude API", "Groq API", "Ollama", "Baileys", "WhatsApp Bots"],
  },
  {
    title: "Dev Tools",
    skills: ["Cursor IDE", "Git / GitHub", "Vercel", "VS Code", "Arduino IDE"],
  },
  {
    title: "Creative",
    skills: ["Blender 5.0", "bpy scripting", "NPR rendering", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
          // STACK
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Technical Toolkit<span className="text-amber-primary">.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TooltipProvider>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="h-full p-8 border-2 border-border bg-card hover:border-amber-primary/50 transition-colors group">
                <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-amber-primary block" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-20">
                  {category.skills.map((skill) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="secondary"
                          className="bg-muted hover:bg-amber-primary hover:text-background transition-all duration-300 rounded-none px-3 py-1 text-sm font-mono cursor-default"
                        >
                          {skill}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="bg-foreground text-background border-none rounded-none">
                        <p className="text-xs uppercase tracking-widest font-bold">
                          Vibe Level: Expert
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
}
