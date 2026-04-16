import { motion } from "motion/react";

export default function VibeCoder() {
  const words = [
    "A vibe coder doesn't wait for a CS degree to ship.",
    "They prompt. They iterate. They learn what they don't know.",
    "They use every tool available — Claude, Cursor, v0, ChatGPT —",
    "like a craftsman uses their entire workshop.",
    "",
    "The code doesn't have to be perfect.",
    "The product does.",
    "",
    "That's the vibe."
  ];

  return (
    <section className="bg-foreground text-background py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-2">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="font-accent text-xs uppercase tracking-[0.3em] font-bold block mb-12 text-center"
        >
          [ WHAT IS A VIBE CODER? ]
        </motion.span>
        
        <div className="space-y-4">
          {words.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              {line ? (
                <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium leading-tight">
                  {line.split(" ").map((word, j) => {
                    const isHighlight = ["prompt.", "iterate.", "ship.", "vibe.", "vibe"].includes(word.toLowerCase());
                    return (
                      <span
                        key={j}
                        className={isHighlight ? "text-amber-primary" : "opacity-100"}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </p>
              ) : (
                <div className="h-8" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1 bg-amber-primary mt-20 origin-left"
        />
      </div>
    </section>
  );
}
