import { useState } from "react";
import { motion } from "framer-motion";

function ResilienceBar({ label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground w-20">
        {label}
      </span>
      <div className="flex-1 h-px bg-border relative">
        <motion.div
          className="absolute top-0 left-0 h-px bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <span className="font-mono text-[10px] text-secondary">{value}%</span>
    </div>
  );
}

export default function PlantCard({ plant, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative aspect-square md:aspect-[3/4]">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            transform: isHovered ? "scale(1.02)" : "scale(1)",
            filter: isHovered
              ? "grayscale(0%) brightness(1)"
              : "grayscale(30%) brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl md:text-2xl lowercase text-foreground">
            {plant.name}
          </h3>
          <span className="font-mono text-[10px] tracking-[0.1em] text-primary">
            {plant.tag}
          </span>
        </div>
        <p className="font-mono text-[11px] italic text-muted-foreground mb-6">
          {plant.latin}
        </p>

        <div className="space-y-3">
          <ResilienceBar label="Wind" value={plant.wind} />
          <ResilienceBar label="Light" value={plant.light} />
          <ResilienceBar label="Care" value={plant.care} />
        </div>
      </div>
    </motion.div>
  );
}
