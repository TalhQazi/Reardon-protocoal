import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";

const Ethics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 lg:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground font-medium">
                  Ethics & Safety Framework
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Conservative By Design
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                The Reardon Protocol is built on aggressive systems thinking, not aggressive claims.
                Ethics, safety, and clear boundaries are treated as core features of the platform,
                not fine print.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Boundaries & Positioning */}
        <section className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                What This Platform Is — And Is Not
              </h2>
              <p className="text-muted-foreground">
                The Reardon Protocol is a structured framework for metabolic and systemic intervention.
                It is not a replacement for emergency medicine, oncology care, or appropriate clinical
                supervision. All protocols are intended to complement, not substitute, qualified
                medical treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  No Miracle Language
                </h3>
                <p className="text-sm text-muted-foreground">
                  We do not promise cures, guaranteed outcomes, or universal reversals. All language
                  is framed around probability, risk reduction, and functional improvement — not
                  absolutes.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Clear Scope of Practice
                </h3>
                <p className="text-sm text-muted-foreground">
                  The protocol focuses on metabolic, inflammatory, and lifestyle modulation. Acute
                  complications, emergencies, and primary cancer treatment decisions remain under
                  the care of licensed medical professionals.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Data-Informed, Not Data-Blind
                </h3>
                <p className="text-sm text-muted-foreground">
                  Protocol changes are driven by biomarkers, pattern recognition, and observed
                  responses. When data suggests increased risk, intensity is reduced or a pathway
                  is discontinued.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Medical Collaboration Encouraged
                </h3>
                <p className="text-sm text-muted-foreground">
                  We encourage participants to share protocol details with their healthcare team and
                  to maintain regular medical follow-up, especially when medications or treatment
                  plans are being adjusted.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safety Practices */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Safety Practices
              </h2>
              <p className="text-muted-foreground">
                Every protocol pathway is designed with conservative guardrails. The aim is to apply
                meaningful biological pressure while respecting individual limits, existing
                treatments, and long-term organ protection.
              </p>
            </motion.div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Progressive Escalation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Interventions are introduced gradually, with room to observe response before
                  stacking additional layers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Red-Flag Monitoring
                </h3>
                <p className="text-sm text-muted-foreground">
                  Symptoms, lab values, and tolerability markers are treated as feedback. When
                  red-flag patterns appear, the default response is to de-escalate and reassess.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Honest Uncertainty
                </h3>
                <p className="text-sm text-muted-foreground">
                  Where evidence is emerging or incomplete, we say so clearly. Speculation is
                  separated from established mechanism to avoid overstating what is known.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default Ethics;
