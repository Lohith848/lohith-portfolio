import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const CHARS = "░▒▓█></_[]{}()!*&^%$#@";

export default function AsciiBackground() {
  const [ascii, setAscii] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateAscii = () => {
      const width = Math.floor(window.innerWidth / 20);
      const height = Math.floor(window.innerHeight / 20);
      let res = "";
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          res += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        res += "\n";
      }
      setAscii(res);
    };

    generateAscii();

    const interval = setInterval(() => {
      setAscii((prev) => {
        const lines = prev.split("\n");
        const newLines = lines.map((line) => {
          const chars = line.split("");
          // Randomly change ~1% of characters
          return chars
            .map((c) =>
              Math.random() > 0.99
                ? CHARS[Math.floor(Math.random() * CHARS.length)]
                : c
            )
            .join("");
        });
        return newLines.join("\n");
      });
    }, 100);

    const handleResize = () => generateAscii();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 select-none z-0"
      aria-hidden="true"
    >
      <pre className="text-[10px] leading-[14px] font-mono text-amber-primary/50 whitespace-pre">
        {ascii}
      </pre>
    </div>
  );
}
