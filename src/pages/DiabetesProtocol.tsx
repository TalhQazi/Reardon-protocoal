import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle, Zap, Heart, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const DiabetesProtocol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-diabetes)] opacity-50" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-diabetes/10 rounded-full blur-3xl animate-glow-pulse" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-diabetes/10 border border-diabetes/30 mb-8">
                <Activity className="w-4 h-4 text-diabetes" />
                <span className="text-sm text-diabetes font-medium">
                  Diabetes Reversal Protocol
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-diabetes mb-6">
                Metabolic Control
                <br />
                Restored
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Diabetes as metabolic control failure, not permanent disease. Rebuild insulin sensitivity, 
                reduce inflammation, restore cellular signaling.
              </p>

              <Link
                to="/intake"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-diabetes text-background font-medium hover:bg-diabetes-glow transition-colors"
              >
                Begin Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {["/9.jpeg","/11.jpeg", "/12.jpeg"].map((src, index) => (
                <div
                  key={src}
                  className="h-14 w-auto rounded-lg border border-diabetes/40 bg-card px-3 py-2 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Diabetes brand mark ${index + 9}`}
                    className="max-h-full max-w-[96px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Understanding Diabetes Differently
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Beyond glucose dysregulation lies a systemic metabolic condition driven by multiple interconnected failures.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Chronic Inflammation",
                  description: "Persistent inflammatory signals that disrupt insulin receptor function and cellular communication.",
                },
                {
                  icon: Heart,
                  title: "Mitochondrial Stress",
                  description: "Cellular energy factories under siege, unable to efficiently process metabolic substrates.",
                },
                {
                  icon: Brain,
                  title: "Receptor Downregulation",
                  description: "Insulin receptors that have become deaf to signals through chronic overstimulation.",
                },
                {
                  icon: Activity,
                  title: "Signaling Overload",
                  description: "Liver and pancreatic systems operating in constant crisis mode, perpetuating dysfunction.",
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
                    className="p-6 rounded-xl bg-card border border-diabetes/20 hover:border-diabetes/40 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-diabetes/10 w-fit mb-4">
                      <Icon className="w-6 h-6 text-diabetes" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Protocol Overview */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Protocol Approach
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multiple biological layers addressed simultaneously for compounding effect.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "Metabolic load reduction through strategic nutrient timing",
                "Cellular energy restoration via mitochondrial support",
                "Hormonal signaling stabilization across multiple axes",
                "Nutrient absorption optimization for enhanced bioavailability",
                "Inflammatory pathway suppression through targeted intervention",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-diabetes flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathways */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Type 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Type 2 Pathway</h3>
                <p className="text-muted-foreground mb-6">
                  Insulin resistance as a reversible condition. Focus on liver and muscle glucose handling.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Reduction in insulin dependence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Elimination of oral medications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Improved A1C stability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Enhanced energy and cognitive clarity</span>
                  </li>
                </ul>
              </motion.div>

              {/* Type 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-xl bg-card border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Type 1 Support</h3>
                <p className="text-muted-foreground mb-6">
                  Autoimmune + metabolic burden management. Supportive control, not false promises.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Lower total insulin requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Reduced glycemic volatility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Organ protection from long-term damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-diabetes mt-2" />
                    <span className="text-sm text-muted-foreground">Improved quality of daily management</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-diabetes/5 border-t border-diabetes/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with a comprehensive intake assessment to determine your personalized pathway.
            </p>
            <Link
              to="/intake"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-diabetes text-background font-medium hover:bg-diabetes-glow transition-colors"
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

export default DiabetesProtocol;
