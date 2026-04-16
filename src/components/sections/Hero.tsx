import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import AsciiBackground from "@/components/ui/AsciiBackground";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center p-6 bg-background overflow-hidden">
      <AsciiBackground />
      <div className="grain" />
      <div className="grid-pattern absolute inset-0 opacity-10" />

      <div className="z-10 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-8 text-amber-dim"
        >
          {">"} LOHITH G
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[85px] font-heading font-black leading-[0.85] uppercase mb-8 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="block lg:w-[670px]"
          >
            BUILDER<span className="text-amber-primary">.</span>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="block"
          >
            INVESTOR<span className="text-amber-primary">.</span>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="block"
          >
            DREAMER<span className="text-amber-primary">.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans"
        >
          I'm Lohith — an 18-year-old CS student who builds real things
          with AI, ships fast, and figures out the rest later.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-amber-primary hover:bg-amber-dim text-background font-bold text-lg px-8 py-6 uppercase tracking-widest font-accent h-auto rounded-none"
            asChild
          >
            <a href="#projects">View My Work ↓</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-amber-primary text-amber-primary hover:bg-amber-primary hover:text-background font-bold text-lg px-8 py-6 uppercase tracking-widest font-accent h-auto rounded-none"
            asChild
          >
            <a href="https://lohva.in" target="_blank">
              lohva.in ⌘
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
