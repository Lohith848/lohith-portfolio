import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function AsciiCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [char, setChar] = useState("_");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setChar(">");
    const handleMouseUp = () => setChar("_");

    if (!isTouch) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="flex items-center justify-center translate-x-4 translate-y-4"
    >
      <span className="font-mono text-primary text-xl font-bold animate-pulse drop-shadow-[0_0_10px_var(--color-primary)]">
        {char}
      </span>
    </motion.div>
  );
}
