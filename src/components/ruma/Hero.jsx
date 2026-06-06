import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/1e3485d18_generated_64f36f08.png";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Lush rooftop garden overlooking Manhattan skyline at golden hour"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollProgress * 0.1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </div>

      {/* Split Title */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <motion.h1
          className="font-display text-[20vw] md:text-[14vw] leading-none text-foreground lowercase tracking-tight select-none"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          ru
        </motion.h1>
        <motion.h1
          className="font-display text-[20vw] md:text-[14vw] leading-none text-foreground lowercase tracking-tight select-none"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          ma
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.div
        className="absolute bottom-32 left-6 md:left-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="font-mono text-sm md:text-xs tracking-[0.2em] uppercase text-secondary mb-2">
          40.7128° N, 74.0060° W
        </p>
        <p className="font-sans text-sm md:text-base text-foreground/80 max-w-xs leading-relaxed">
          Botanical luxury for New York's most demanding landscapes.
        </p>
      </motion.div>

      {/* Scroll Vine Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          className="w-px bg-primary origin-top"
          style={{ height: `${40 + scrollProgress * 30}px` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <ArrowDown className="w-3 h-3 text-primary animate-bounce" />
        </motion.div>
      </div>

      {/* Corner Metadata */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="font-mono text-sm tracking-[0.15em] text-muted-foreground text-right">
          URBAN VITALITY
          <br />
          NEW YORK · EST. 2026
        </p>
      </motion.div>
    </section>
  );
}
