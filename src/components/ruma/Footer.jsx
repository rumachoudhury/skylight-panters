import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  studio: [
    { label: "About Ruma", href: "#" },
    { label: "Our Process", href: "#services" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Rooftop Design", href: "#services" },
    { label: "Living Walls", href: "#services" },
    { label: "Container Gardens", href: "#services" },
    { label: "Seasonal Care", href: "#services" },
  ],
  explore: [
    { label: "Plant Inventory", href: "#inventory" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Plant Care Guide", href: "#" },
    { label: "NYC Climate Data", href: "#" },
  ],
  connect: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to The Seasonal Forecast.");
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-24 md:pt-32 pb-8 px-6 md:px-12 overflow-hidden"
    >
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <h2
          className="font-display text-[25vw] leading-[0.8] lowercase text-transparent tracking-tight"
          style={{ WebkitTextStroke: "1px hsl(150 8% 18%)" }} //👉 “Add border/outline around text
        >
          plant
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter */}
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-4">
            The Seasonal Forecast
          </span>
          <h3 className="font-display text-3xl md:text-5xl lowercase text-foreground mb-8 max-w-lg">
            plant intelligence, delivered monthly
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-0 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-border py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-24">
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-display text-lg tracking-widest lowercase text-foreground">
            ruma
          </span>
          <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
            © 2026 RUMA BOTANICAL STUDIOS — NEW YORK CITY
          </span>
          <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
            40.7128° N, 74.0060° W
          </span>
        </div>
      </div>
    </footer>
  );
}
