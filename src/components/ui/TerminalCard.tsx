import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TerminalCardProps {
  title: string;
  lines: string[];
  className?: string;
}

export default function TerminalCard({ title, lines, className }: TerminalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "bg-card border-2 border-border shadow-2xl overflow-hidden font-mono text-sm",
        className
      )}
    >
      {/* Header */}
      <div className="bg-muted px-4 py-2 border-b-2 border-border flex justify-between items-center">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-primary/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
          {title}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {line.startsWith(">") ? (
              <span className="text-amber-primary shrink-0">&gt;</span>
            ) : line.startsWith("$") ? (
              <span className="text-blue-400 shrink-0">$</span>
            ) : null}
            <span
              className={cn(
                "whitespace-pre-wrap break-all",
                line.startsWith("$") ? "text-foreground font-bold" : "text-muted-foreground"
              )}
            >
              {line.startsWith(">") || line.startsWith("$") ? line.slice(1).trim() : line}
            </span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-amber-primary ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
}
