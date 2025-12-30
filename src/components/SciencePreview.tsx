import { motion } from "framer-motion";
import { Brain, Zap, Shield, Target } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Systems Biology",
    description: "Multi-layer intervention across metabolism, inflammation, and immune response.",
  },
  {
    icon: Zap,
    title: "Stacked Pressure",
    description: "Coordinated mild interventions outperform single aggressive approaches.",
  },
  {
    icon: Shield,
    title: "Adaptive Defense",
    description: "Redundancy as a feature. Block escape routes before they form.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Data-driven refinement. Pattern recognition over rigid protocols.",
  },
];

export function SciencePreview() {
  return (
    <section className="relative py-20 lg:py-32 min-h-screen overflow-hidden bg-[url('/15.jpeg')] bg-cover bg-[position:center_top]">
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground/90 mb-4">
            The Science Behind the Protocol
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Why single-target therapies fail and how biological pressure points create lasting change.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-card border border-border hover:border-muted-foreground/30 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-secondary w-fit mb-4 group-hover:bg-muted transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/science"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-foreground transition-colors"
          >
            Explore the full scientific rationale
            <span className="text-white">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
