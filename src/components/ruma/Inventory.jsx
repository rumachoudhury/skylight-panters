import { motion } from "framer-motion";
import PlantCard from "./PlantCard";

const plants = [
  {
    name: "fiddle leaf fig",
    latin: "Ficus lyrata",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/69210f3e1_generated_118d51d3.png",
    tag: "INDOOR",
    wind: 25,
    light: 70,
    care: 60,
  },
  {
    name: "monstera",
    latin: "Monstera deliciosa",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/22715e1dc_generated_70eaa285.png",
    tag: "INDOOR",
    wind: 20,
    light: 55,
    care: 35,
  },
  {
    name: "maidenhair fern",
    latin: "Adiantum raddianum",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/572ae26ba_generated_025abd99.png",
    tag: "SHADE",
    wind: 15,
    light: 30,
    care: 85,
  },
  {
    name: "snake plant",
    latin: "Dracaena trifasciata",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/6e1bdb590_generated_f66cc03d.png",
    tag: "LOW LIGHT",
    wind: 45,
    light: 20,
    care: 10,
  },
];

export default function Inventory() {
  return (
    <section id="inventory" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-4">
              Curated For Climate
            </span>
            <h2 className="font-display text-5xl md:text-7xl lowercase text-foreground">
              inventory
            </h2>
          </div>
          <p className="font-sans text-sm text-muted-foreground max-w-sm leading-relaxed">
            {/* Every species selected for its resilience to New York's unique
            micro-climates — wind corridors, reflected heat, and limited light. */}
            Every plant is carefully selected to thrive in New York’s changing
            weather conditions, including wind, heat, and low light.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {plants.map((plant, i) => (
            <PlantCard key={plant.name} plant={plant} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
