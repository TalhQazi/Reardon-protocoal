import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Dna, ArrowRight, Shield, Target, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const CancerProtocol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-cancer)] opacity-50" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cancer/10 rounded-full blur-3xl animate-glow-pulse" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cancer/10 border border-cancer/30 mb-8">
                <Dna className="w-4 h-4 text-cancer" />
                <span className="text-sm text-cancer font-medium">
                  Cancer Intervention Protocol
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-cancer mb-6">
                Pressure-Based
                <br />
                Disruption
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Cancer as biological environment problem. Alter conditions that allow malignant cells to survive, 
                adapt, and dominate through multi-system pressure.
              </p>

              <Link
                to="/intake"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cancer text-background font-medium hover:bg-cancer-glow transition-colors"
              >
                Begin Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {["/13.jpeg", "/14.jpeg", "/15.jpeg", "/16.jpeg"].map((src, index) => (
                <div
                  key={src}
                  className="h-14 w-auto rounded-lg border border-cancer/40 bg-card px-3 py-2 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Cancer brand mark ${index + 13}`}
                    className="max-h-full max-w-[96px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rethinking Cancer */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Rethinking Cancer
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Not genetic accident, but systemic failure. Cancer thrives when the biological environment allows it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Metabolic Opportunist",
                  description: "Cancer exploits metabolic vulnerabilities, feeding on glucose and glutamine in ways healthy cells cannot.",
                },
                {
                  icon: Shield,
                  title: "Immune Evasion",
                  description: "Sophisticated mechanisms that cloak malignant cells from the body's natural surveillance systems.",
                },
                {
                  icon: Layers,
                  title: "Signaling Imbalance",
                  description: "Disrupted cellular communication that allows unchecked growth and survival signals.",
                },
                {
                  icon: Target,
                  title: "Energy Dysfunction",
                  description: "Warburg effect exploitation — fermentation over oxidation even in oxygen-rich environments.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-cancer/20 hover:border-cancer/40 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-cancer/10 w-fit mb-4">
                      <Icon className="w-6 h-6 text-cancer" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Multi-Modal Philosophy */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Multi-Modal Intervention
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stacking coordinated pressures across biological systems to remove adaptation pathways.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Pressure Points</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cancer mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Metabolic Fuel Restriction</span>
                      <p className="text-sm text-muted-foreground">Limiting preferred energy substrates</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cancer mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Inflammatory Suppression</span>
                      <p className="text-sm text-muted-foreground">Reducing pro-tumor signaling</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cancer mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Immune Activation</span>
                      <p className="text-sm text-muted-foreground">Restoring surveillance capacity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cancer mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Stress Threshold Manipulation</span>
                      <p className="text-sm text-muted-foreground">Pushing cells past survival limits</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Multi-Modal Works</h3>
                <p className="text-muted-foreground mb-6">
                  Single-target therapies fail because cancer adapts. By applying pressure across multiple 
                  systems simultaneously, escape routes are closed before they can be exploited.
                </p>
                <div className="p-4 rounded-lg bg-cancer/5 border border-cancer/20">
                  <p className="text-sm text-foreground font-medium mb-2">Redundancy as Feature</p>
                  <p className="text-sm text-muted-foreground">
                    Each intervention reinforces the others. If one pathway is circumvented, 
                    multiple backup pressures remain active.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conventional Care Integration */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Working With Conventional Care
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Designed to complement, not replace. The protocol enhances treatment tolerance, 
                reduces systemic damage, and supports immune recovery alongside oncology care.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  "Improved treatment tolerance",
                  "Reduced systemic damage",
                  "Enhanced immune recovery",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-secondary text-center"
                  >
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-cancer/5 border-t border-cancer/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a comprehensive intake assessment to determine your personalized pathway.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cancer text-background font-medium hover:bg-cancer-glow transition-colors"
            >
              Start Intake Process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default CancerProtocol;
