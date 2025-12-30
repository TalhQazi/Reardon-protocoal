import { motion } from "framer-motion";
import { ArrowRight, Activity, Dna } from "lucide-react";
import { Link } from "react-router-dom";

interface PathwayCardProps {
  type: "diabetes" | "cancer";
}

const content = {
  diabetes: {
    title: "Diabetes Reversal",
    subtitle: "Type 1 & Type 2",
    description:
      "Metabolic control failure, not permanent disease. Rebuild insulin sensitivity, reduce inflammation, restore cellular signaling, and unload metabolic stress across the entire system.",
    features: [
      "Metabolic load reduction",
      "Cellular energy restoration",
      "Hormonal signaling stabilization",
      "Inflammatory pathway suppression",
    ],
    link: "/diabetes",
    icon: Activity,
  },
  cancer: {
    title: "Cancer Intervention",
    subtitle: "Pressure-Based Protocol",
    description:
      "Biological environment problem, not genetic accident. Alter internal conditions that allow malignant cells to survive, adapt, and dominate through multi-system pressure application.",
    features: [
      "Metabolic fuel disruption",
      "Immune activation pathways",
      "Cellular stress targeting",
      "Adaptive response blocking",
    ],
    link: "/cancer",
    icon: Dna,
  },
};

export function PathwayCard({ type }: PathwayCardProps) {
  const data = content[type];
  const Icon = data.icon;
  const isDiabetes = type === "diabetes";

  return (
    <motion.div
      initial={{ opacity: 0, x: isDiabetes ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: isDiabetes ? 0.2 : 0.4 }}
      className="relative h-full group"
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          isDiabetes ? "bg-[var(--gradient-glow-diabetes)]" : "bg-[var(--gradient-glow-cancer)]"
        }`}
        style={{
          background: isDiabetes
            ? "radial-gradient(ellipse at center, hsl(187 72% 45% / 0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center, hsl(355 70% 55% / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Card Content */}
      <div
        className={`relative h-full p-8 lg:p-12 rounded-2xl border transition-all duration-500 ${
          isDiabetes
            ? "border-diabetes/20 hover:border-diabetes/40"
            : "border-cancer/20 hover:border-cancer/40"
        } bg-card/50 backdrop-blur-sm`}
      >
        {/* Icon */}
        <div
          className={`inline-flex p-3 rounded-xl mb-6 ${
            isDiabetes ? "bg-diabetes/10" : "bg-cancer/10"
          }`}
        >
          <Icon
            className={`w-8 h-8 ${isDiabetes ? "text-diabetes" : "text-cancer"}`}
          />
        </div>

        {/* Title */}
        <h2
          className={`text-3xl lg:text-4xl font-bold mb-2 ${
            isDiabetes ? "text-gradient-diabetes" : "text-gradient-cancer"
          }`}
        >
          {data.title}
        </h2>
        <p className="text-muted-foreground text-lg mb-6">{data.subtitle}</p>

        {/* Description */}
        <p className="text-foreground/80 leading-relaxed mb-8">
          {data.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {data.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isDiabetes ? "bg-diabetes" : "bg-cancer"
                }`}
              />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={data.link}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            isDiabetes
              ? "bg-diabetes/10 text-diabetes hover:bg-diabetes/20 border border-diabetes/30"
              : "bg-cancer/10 text-cancer hover:bg-cancer/20 border border-cancer/30"
          }`}
        >
          Explore Protocol
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
