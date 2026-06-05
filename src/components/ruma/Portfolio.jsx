import { motion } from "framer-motion";

const projects = [
  {
    title: "SoHo Loft",
    location: "SoHo, Manhattan",
    coordinate: "40.7233° N, 74.0030° W",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/b1fdf2aa0_generated_0c51c2cb.png",
    description:
      "Terrace transformation with wind-resistant grasses and sculptural planters.",
  },
  {
    title: "Williamsburg Terrace",
    location: "Williamsburg, Brooklyn",
    coordinate: "40.7081° N, 73.9571° W",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/84ba415dc_generated_4b31e4fe.png",
    description:
      "Mediterranean-inspired rooftop retreat with olive trees and aromatic herbs.",
  },
  {
    title: "Chelsea Living Wall",
    location: "Chelsea, Manhattan",
    coordinate: "40.7465° N, 74.0014° W",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/87284ebad_generated_73e5f663.png",
    description:
      "Interior vertical garden system spanning three stories of a converted gallery.",
  },
  {
    title: "Park Slope Sanctuary",
    location: "Park Slope, Brooklyn",
    coordinate: "40.6710° N, 73.9777° W",
    image:
      "https://media.base44.com/images/public/6a20ce7ba3e163ef2241114c/c65dd8559_generated_acf16c2e.png",
    description:
      "Historic brownstone backyard transformed into a layered pocket forest.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-4">
            Before The Concrete
          </span>
          <h2 className="font-display text-5xl md:text-7xl lowercase text-foreground">
            portfolio
          </h2>
        </motion.div>

        <div className="space-y-px">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group grid grid-cols-1 md:grid-cols-12 gap-px bg-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={`md:col-span-7 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0 grayscale-[20%]"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="inline-block bg-background/70 backdrop-blur-md px-3 py-1.5 rounded-sm font-mono text-[10px] tracking-[0.15em] uppercase text-foreground">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-5 bg-background p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground block mb-6">
                  {project.coordinate}
                </span>
                <h3 className="font-display text-3xl md:text-4xl lowercase text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="font-mono text-xs tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
                >
                  View Project
                  <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
