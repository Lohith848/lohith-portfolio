import { useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(var(--primary-rgb, 200, 169, 122), 0.15)",
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - left);
    y.set(e.clientY - top);
  };

  // Define a variable for the spotlight color that pulls from the theme
  const spotlightStyle = {
    background: useTransform(
      [x, y],
      ([latestX, latestY]) =>
        `radial-gradient(600px circle at ${latestX}px ${latestY}px, var(--spotlight-color, ${spotlightColor}), transparent 40%)`
    ),
    opacity: isHovered ? 1 : 0,
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 transition duration-300"
        style={spotlightStyle}
      />
      {children}
    </div>
  );
}
