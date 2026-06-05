import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cloud, Sun, CloudRain, Wind } from "lucide-react";

const navLinks = [
  { label: "inventory", href: "#inventory" },
  { label: "portfolio", href: "#portfolio" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" },
];

const weatherTips = {
  sunny: {
    icon: Sun,
    tip: "Perfect day to water your rooftop containers. UV is high — shade new transplants.",
    condition: "72°F · Sunny",
  },
  cloudy: {
    icon: Cloud,
    tip: "Ideal conditions for repotting and pruning. Low stress on transplants today.",
    condition: "65°F · Overcast",
  },
  rainy: {
    icon: CloudRain,
    tip: "Skip watering. Check drainage on balcony planters to prevent root rot.",
    condition: "58°F · Rain",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentWeather = weatherTips.sunny;
  const WeatherIcon = currentWeather.icon;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <a
            href="#"
            className="font-display text-2xl tracking-widest text-foreground lowercase"
          >
            ruma
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-secondary transition-colors"
            aria-label="Menu"
          >
            <Wind className="w-4 h-4 text-secondary" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col h-full px-6 md:px-12 py-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl tracking-widest text-foreground lowercase">
                  ruma
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-primary transition-colors"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              <div className="mt-8 p-5 rounded-sm border border-border bg-muted/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <WeatherIcon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs tracking-[0.1em] text-primary">
                    {currentWeather.condition}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground ml-auto">
                    NYC · TODAY
                  </span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {currentWeather.tip}
                </p>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-6 py-4 border-b border-border"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl md:text-6xl lowercase text-foreground group-hover:text-primary transition-colors duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground pb-6">
                40.7128° N, 74.0060° W — NEW YORK CITY
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
