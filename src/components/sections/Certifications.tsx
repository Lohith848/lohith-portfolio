import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  link?: string;
}

const certs: Certificate[] = [
  {
    name: "Claude Certified Architect",
    issuer: "Anthropic / Foundations",
    date: "2026",
    status: "In Progress",
  },
  {
    name: "GenAI Powered Data Analytics",
    issuer: "Tata-Forage",
    date: "2025",
    status: "Completed",
  },
  {
    name: "IBM Web Development",
    issuer: "IBM Skills Build",
    date: "2026",
    status: "In Progress",
  },
  {
    name: "Software Engineering",
    issuer: "JP Morgan Chase-Forage",
    date: "2025",
    status: "Completed",
  },
  {
    name: "Solutions Architecture",
    issuer: "AWS-Forage",
    date: "2025",
    status: "Completed",
  },
  {
    name: "Finance Management",
    issuer: "Maiyyam",
    date: "2026",
    status: "Completed",
  },
  {
    name: "C Programming",
    issuer: "iamNEO",
    date: "2025",
    status: "Completed",
  },
  {
    name: "SEBI-Investor Awareness",
    issuer: "SEBI",
    date: "2026",
    status: "Completed",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
          // PROOF OF KNOWLEDGE
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          Certifications<span className="text-amber-primary">.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: 1 }}
            className="p-6 border-2 border-border bg-card shadow-xl flex flex-col justify-between relative"
          >
            <div className="mb-8">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 bg-muted text-amber-primary">
                    <Award className="w-6 h-6" />
                 </div>
                 {cert.status === "In Progress" && (
                   <span className="text-[10px] font-mono text-amber-primary flex items-center gap-1 animate-pulse">
                      <Calendar className="w-3 h-3" /> PENDING
                   </span>
                 )}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 leading-tight">
                {cert.name}
              </h3>
              <p className="text-[10px] uppercase font-mono opacity-50 tracking-widest">
                {cert.issuer}
              </p>
            </div>

            <div className="flex justify-between items-end border-t border-border pt-4">
               <span className="text-xs font-mono opacity-40">{cert.date}</span>
               {cert.link && (
                 <a href={cert.link} className="text-amber-primary hover:scale-110 transition-transform">
                   <ExternalLink className="w-4 h-4" />
                 </a>
               )}
            </div>

            {/* Visual Pin */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-primary/20 rounded-full border-2 border-amber-primary flex items-center justify-center">
               <div className="w-1 h-1 bg-amber-primary rounded-full shadow-[0_0_5px_var(--color-amber-primary)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
