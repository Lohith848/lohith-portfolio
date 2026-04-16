import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
              // CONNECT
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Ready to vibe through a project?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm usually available. I'm always building. 
              Let's build something that actually works.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:lohithg080408@gmail.com" className="flex items-center gap-6 group">
               <div className="p-4 bg-muted group-hover:bg-amber-primary group-hover:text-background transition-all">
                  <Mail className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-[10px] uppercase font-mono opacity-40">email</p>
                  <p className="font-heading font-bold text-lg">lohith080408@gmail.com</p>
               </div>
            </a>
            <div className="flex items-center gap-6 group">
               <div className="p-4 bg-muted">
                  <MapPin className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-[10px] uppercase font-mono opacity-40">location</p>
                  <p className="font-heading font-bold text-lg">Coimbatore, Tamil Nadu</p>
               </div>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
             <Button variant="outline" className="rounded-none border-2 border-border gap-2 font-accent uppercase text-xs p-6" asChild>
                <a href="https://github.com/Lohith848" target="_blank">
                  <Github className="w-4 h-4" /> Github
                </a>
             </Button>
             <Button variant="outline" className="rounded-none border-2 border-border gap-2 font-accent uppercase text-xs p-6" asChild>
                <a href="https://linkedin.com/in/lohithbuilds/" target="_blank">
                  <Linkedin className="w-4 h-4" /> Linkedin
                </a>
             </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border-2 border-border bg-card shadow-lg relative overflow-hidden"
        >
          {status === "success" ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
             >
                <div className="w-16 h-16 bg-amber-primary/20 text-amber-primary flex items-center justify-center rounded-full">
                  <Send className="w-8 h-8" />
                </div>
                <div className="font-mono text-sm space-y-2">
                   <p className="text-amber-primary">{">"} message.send()</p>
                   <p className="text-green-500 font-bold tracking-widest uppercase animate-pulse">Status: 200 OK</p>
                   <p className="opacity-60 pt-4">I'll get back to you across the wire soon.</p>
                </div>
                <Button variant="link" onClick={() => setStatus("idle")} className="text-amber-primary font-accent uppercase tracking-widest font-bold">
                   Open Shell Again
                </Button>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest opacity-40">Your Name</label>
                <Input required className="border-2 border-border rounded-none bg-muted/30 focus:border-amber-primary focus:ring-0 h-12" placeholder="ALAN TURING" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest opacity-40">Email / WhatsApp</label>
                <Input required type="text" className="border-2 border-border rounded-none bg-muted/30 focus:border-amber-primary focus:ring-0 h-12" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono tracking-widest opacity-40">Mission Brief</label>
                <Textarea required className="border-2 border-border rounded-none bg-muted/30 focus:border-amber-primary focus:ring-0 h-32 resize-none" placeholder="Let's build a..." />
              </div>
              
              <Button type="submit" disabled={status === "sending"} className="w-full bg-amber-primary hover:bg-amber-dim text-background rounded-none h-14 font-accent font-bold uppercase tracking-[0.2em] group">
                {status === "sending" ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : (
                  <>
                    Initialize Connection
                    <Send className="w-4 h-4 ml-3 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </>
                )}
              </Button>

              <div className="pt-4 flex items-center gap-2 opacity-20 font-mono text-[10px] uppercase tracking-tighter">
                 <div className="w-2 h-2 bg-amber-primary rounded-full animate-pulse" />
                 Secure end-to-end transmission
              </div>
            </form>
          )}

          {/* Background Decor */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-primary/10 blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
