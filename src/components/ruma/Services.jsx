import { motion } from "framer-motion";
import { Leaf, Building2, Sprout, Droplets } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "rooftop design",
    description:
      "Full-scale rooftop garden architecture tailored to NYC wind loads, weight restrictions, and sun exposure patterns.",
    coordinate: "40.7580° N",
  },
  {
    icon: Leaf,
    title: "living walls",
    description:
      "Vertical garden systems for interiors and facades. Engineered irrigation, curated plant selection for low-light NYC lofts.",
    coordinate: "40.7282° N",
  },
  {
    icon: Sprout,
    title: "container gardens",
    description:
      "Bespoke container arrangements for terraces, balconies, and fire escapes. Climate-resilient species, premium planters.",
    coordinate: "40.6892° N",
  },
  {
    icon: Droplets,
    title: "seasonal care",
    description:
      "Year-round maintenance programs. Winter protection, spring planting, summer irrigation, and autumn preparation.",
    coordinate: "40.7484° N",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-4">
            What We Cultivate
          </span>
          <h2 className="font-display text-5xl md:text-7xl lowercase text-foreground">
            services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-background p-8 md:p-12 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                    <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground">
                    {service.coordinate}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl lowercase text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
