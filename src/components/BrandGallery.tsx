import { motion } from "framer-motion";

const logos = Array.from({ length: 21 }, (_, i) => `${i + 1}.jpeg`);

export function BrandGallery() {
  return (
    <section className="py-20 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Ecosystem Partners & Protocol Marks
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Visual identity marks used across the broader protocol ecosystem, therapies, and supporting systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {logos.map((file, index) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="aspect-square rounded-xl bg-card border border-border/60 overflow-hidden flex items-center justify-center p-3 sm:p-4"
            >
              <img
                src={`/${file}`}
                alt={`Protocol brand mark ${index + 1}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
