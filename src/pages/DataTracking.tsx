import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Activity, BarChart3, LineChart, ShieldCheck } from "lucide-react";

const DataTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/40">
          {/* Light overlay so text stays readable */}
          <div className="absolute inset-0 bg-white/30" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <BarChart3 className="w-4 h-4 text-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  Data & Tracking
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                A Control Panel, Not a Logbook
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                The goal of tracking is not to collect graphs for their own sake. It is to
                continuously adjust biological pressure based on how your system is actually
                responding over time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Tracking Concepts */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                What Gets Measured, Adapts
              </h2>
              <p className="text-muted-foreground max-w-3xl">
                Future product layers will integrate continuous glucose data, symptom patterns,
                lab markers, and protocol adherence into a single interface designed for pattern
                recognition — not endless manual logging.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                  <Activity className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Continuous Signals
                </h3>
                <p className="text-sm text-muted-foreground">
                  Glucose trends, heart rate variability, sleep quality and other streams provide
                  a live picture of system stress.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                  <LineChart className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Pattern Recognition
                </h3>
                <p className="text-sm text-muted-foreground">
                  The value is in how signals move together — which interventions stabilize, and
                  which introduce volatility.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                  <ShieldCheck className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Adaptive Guardrails
                </h3>
                <p className="text-sm text-muted-foreground">
                  When data crosses predefined thresholds, the system is designed to recommend
                  de-escalation, further testing, or clinical review — not blind continuation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Interface Placeholder */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Built for the Next Layer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              The current site represents the operating philosophy. A dedicated data interface —
              with dashboards, alerts, and collaboration tools — is in active design and will sit
              on top of the same intake and protocol engine.
            </p>
            <p className="text-xs text-muted-foreground">
              Product details, screenshots, and onboarding flows will be added as the software
              layer approaches private testing.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default DataTracking;
