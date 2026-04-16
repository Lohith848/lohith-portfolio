import { motion } from "motion/react";
import { Github, ExternalLink, Terminal, Shield, Utensils, Zap, Shirt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import SpotlightCard from "@/components/ui/SpotlightCard";

interface Project {
  title: string;
  type: string;
  stack: string[];
  desc: string;
  status: "live" | "in-dev" | "archived";
  github?: string;
  demo?: string;
  icon: any;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Food Ordering PWA",
    type: "Full-Stack WebApp",
    stack: ["Next.js", "Supabase", "shadcn/ui", "WA Integration"],
    desc: "A student food ordering PWA replacing WhatsApp/phone chaos for a local hostel restaurant. Orders dispatch pre-filled messages to owner.",
    status: "in-dev",
    icon: Utensils,
    featured: true,
  },
  {
    title: "Cyrus AI",
    type: "Personal Assistant",
    stack: ["Python", "Groq API", "Claude", "Ollama", "Baileys"],
    desc: "My personal AI assistant with OS-level control, WhatsApp interface, and hardware metrics. Flagship automation project.",
    status: "live",
    github: "http://github.com/Lohith848/Cyrus-ai",
    icon: Zap,
    featured: true,
  },
  {
    title: "TargetDetected",
    type: "Security Utility",
    stack: ["Python", "face_recognition", "Telegram API"],
    desc: "Security monitor — detects failed Windows logins, captures webcam photo, sends Telegram alert.",
    status: "live",
    github: "https://github.com/Lohith848/TargetDetected",
    icon: Shield,
  },
  {
    title: "Wardrobe AI",
    type: "AI Fashion Engine",
    stack: ["React", "Vision AI", "Next.js"],
    desc: "Generates outfits based on user's closet. Analyzes images to separate items and saves digital wardrobe.",
    status: "live",
    demo: "https://mywardrobedripai.vercel.app/",
    icon: Shirt,
  },
  {
    title: "Dental Clinic Site",
    type: "Client Work",
    stack: ["HTML/CSS", "Interactivity", "Design"],
    desc: "Freelance redesign for Shiva Dental Clinic in Coimbatore. Transformed outdated site into modern responsive one.",
    status: "live",
    icon: Github,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
          // CODEBASE
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Proven Builds<span className="text-amber-primary">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "md:col-span-2",
              project.featured && "md:col-span-3"
            )}
          >
            <SpotlightCard
              className={cn(
                "group relative h-full overflow-hidden border-2 border-border bg-card p-8 flex flex-col justify-between hover:border-amber-primary/50 transition-all duration-500",
                project.featured && "min-h-[400px]"
              )}
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-muted rounded-none text-foreground group-hover:text-amber-primary transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <span className="text-[10px] uppercase font-mono tracking-widest opacity-40">
                      {">"} {project.type}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        project.status === 'live' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 
                        project.status === 'in-dev' ? 'bg-amber-500 animate-pulse' : 'bg-muted-foreground'
                      )} />
                      <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60">
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className={cn(
                  "font-heading font-bold mb-4 group-hover:text-amber-primary transition-colors relative z-20",
                  project.featured ? "text-3xl" : "text-2xl"
                )}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-20">
                  {project.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-20">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <Badge key={tech} variant="outline" className="text-[10px] uppercase tracking-tighter border-border px-2 rounded-none">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" className="p-2 border border-border hover:border-amber-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="p-2 border border-border hover:border-amber-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <div className="ml-auto flex items-center gap-2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Terminal className="w-3 h-3 text-amber-primary" />
                    <span>view source</span>
                  </div>
                </div>
              </div>

              {/* Background Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-primary/5 blur-[100px] pointer-events-none group-hover:bg-amber-primary/10 transition-all" />
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
