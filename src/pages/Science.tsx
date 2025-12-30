import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Atom, GitBranch, Layers, Target, TrendingUp, Repeat } from "lucide-react";

const Science = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 min-h-screen overflow-hidden bg-[url('/17.jpeg')] bg-cover bg-[position:center_top]">
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <Atom className="w-4 h-4 text-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  Scientific Foundation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Systems Biology
                <br />
                <span className="text-white">Not Symptom Chasing</span>
              </h1>

              <p className="text-xl text-foreground max-w-2xl">
                Understanding why single-target approaches fail and how coordinated biological 
                pressure creates lasting metabolic change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Core Principles
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                The protocol operates on foundational insights about biological systems and their failure modes.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {[
                {
                  icon: GitBranch,
                  title: "Interconnected Systems",
                  description: "Metabolism, inflammation, and immune response don't operate in isolation. They form a tightly coupled network where dysfunction in one area cascades throughout the system. Treating symptoms in isolation ignores this fundamental reality.",
                  color: "diabetes",
                },
                {
                  icon: Layers,
                  title: "Stacked Interventions",
                  description: "Mild, coordinated pressure across multiple systems outperforms single aggressive interventions. Each layer reinforces the others, creating compound effects that individual therapies cannot achieve alone.",
                  color: "foreground",
                },
                {
                  icon: Target,
                  title: "Blocking Escape Routes",
                  description: "Biological systems—especially cancer—adapt to single-point attacks. Multi-modal pressure closes adaptation pathways before they can be exploited, preventing the resistance that derails most therapies.",
                  color: "cancer",
                },
                {
                  icon: TrendingUp,
                  title: "Pattern Recognition",
                  description: "Continuous monitoring reveals patterns invisible to static assessments. Data-driven refinement allows the protocol to adapt faster than disease progression, maintaining pressure advantage.",
                  color: "foreground",
                },
                {
                  icon: Repeat,
                  title: "Iterative Refinement",
                  description: "No protocol survives first contact unchanged. Built-in feedback loops allow rapid adjustment based on individual response, ensuring interventions remain optimized over time.",
                  color: "diabetes",
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
                    className="flex gap-6 p-8 rounded-xl bg-card border border-border"
                  >
                    <div className={`p-4 rounded-xl h-fit ${
                      item.color === "diabetes" 
                        ? "bg-diabetes/10" 
                        : item.color === "cancer" 
                        ? "bg-cancer/10" 
                        : "bg-secondary"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        item.color === "diabetes" 
                          ? "text-diabetes" 
                          : item.color === "cancer" 
                          ? "text-cancer" 
                          : "text-foreground"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shared Mechanisms */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Diabetes and Cancer Share a Platform
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Despite different origins, metabolic dysfunction and malignancy share overlapping biological terrain.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Inflammation",
                  description: "Chronic inflammation drives both insulin resistance and creates tumor-favorable microenvironments.",
                },
                {
                  title: "Metabolic Stress",
                  description: "Mitochondrial dysfunction underlies both diabetic complications and cancer cell survival mechanisms.",
                },
                {
                  title: "Signaling Disruption",
                  description: "Growth factor dysregulation promotes both metabolic failure and uncontrolled cellular proliferation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-diabetes to-cancer mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-background">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <p className="text-sm text-muted-foreground text-center">
                The scientific rationale presented here represents our framework for understanding biological systems 
                and chronic disease. This is not medical advice. Individual protocols are developed through comprehensive 
                assessment and should complement, not replace, appropriate medical care.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default Science;
