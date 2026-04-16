import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Website Design & Development",
    desc: "Custom websites for local businesses. Mobile-first, fast-loading, SEO-ready.",
    price: "From ₹3,500",
    features: ["Responsive Design", "Basic SEO", "Vercel Hosting"]
  },
  {
    title: "AI Automation",
    desc: "WhatsApp bots, chatbots, workflow automators. Integrate AI into your business.",
    price: "Custom Pricing",
    features: ["WA Chatbots", "Claude Integration", "Prompt Engineering"]
  },
  {
    title: "Website Redesign",
    desc: "Transform outdated sites into modern ones. Better UX and speed.",
    price: "Custom Pricing",
    features: ["Modern UI", "Speed Optimization", "Accessibility"]
  }
];

export default function Freelance() {
  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            // SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Freelance & Collab<span className="text-amber-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border-2 border-border bg-card hover:border-amber-primary transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-amber-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <div className="p-1 bg-amber-primary/10 text-amber-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="opacity-80 uppercase tracking-tighter font-mono text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="pt-6 border-t border-border mb-6">
                  <span className="text-amber-primary font-heading font-bold text-xl">{service.price}</span>
                </div>
                <Button className="w-full bg-border hover:bg-amber-primary hover:text-background rounded-none transition-all group/btn flex justify-between px-6 uppercase tracking-widest text-xs font-bold font-accent">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border-2 border-dashed border-border flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold">
                    C{i}
                 </div>
               ))}
            </div>
            <p className="text-sm font-mono opacity-60 italic">
               Always Fueled by curiosity · 
            </p>
          </div>
          <Button variant="link" className="text-amber-primary font-accent uppercase tracking-widest font-bold">
             Check Demo Site →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
