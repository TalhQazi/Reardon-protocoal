import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { ClipboardList, ArrowRight, CheckCircle, Lock, BarChart3 } from "lucide-react";

const Intake = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-[url('/20.jpeg')] bg-cover bg-center">
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-white/65" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <ClipboardList className="w-4 h-4 text-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  Intake & Personalization
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Structured
                <br />
                <span className="text-muted-foreground">Assessment</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Not a questionnaire. A decision engine that stratifies risk, identifies intervention 
                points, and calibrates protocol pathways to your specific biology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Intake Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Three stages designed to gather the information needed for protocol personalization.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Medical History",
                  description: "Comprehensive review of past diagnoses, treatments, medications, and outcomes. What has been tried. What has worked. What has failed.",
                  items: ["Previous diagnoses", "Medication history", "Treatment outcomes", "Family history"],
                },
                {
                  step: "02",
                  title: "Biomarker Analysis",
                  description: "Current metabolic, inflammatory, and functional markers. The objective data that reveals system state beyond symptoms.",
                  items: ["Metabolic panels", "Inflammatory markers", "Hormonal profiles", "Functional assessments"],
                },
                {
                  step: "03",
                  title: "Risk Stratification",
                  description: "Algorithmic assessment that categorizes intervention urgency, identifies priority targets, and determines appropriate protocol intensity.",
                  items: ["Priority scoring", "Intervention mapping", "Protocol selection", "Timeline projection"],
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-8 rounded-xl bg-card border border-border"
                >
                  <div className="text-4xl font-bold text-muted-foreground/30">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((subItem) => (
                        <span
                          key={subItem}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                        >
                          {subItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Secure & Private",
                  description: "All data encrypted and handled with strict confidentiality protocols.",
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven",
                  description: "Algorithmic analysis, not guesswork. Objective markers drive decisions.",
                },
                {
                  icon: CheckCircle,
                  title: "Actionable Output",
                  description: "Clear protocol recommendations with priority ordering and timelines.",
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
                    className="p-6 rounded-xl bg-card border border-border text-center"
                  >
                    <div className="p-3 rounded-lg bg-secondary w-fit mx-auto mb-4">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Begin Your Assessment
            </h2>
            <p className="text-muted-foreground mb-8">
              The intake process takes approximately 30-45 minutes to complete. Have relevant medical 
              records and recent lab work available for best results.
            </p>
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
            >
              Start Intake Process
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Intake system launching soon. Contact us for early access.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {["/19.jpeg", "/20.jpeg", "/21.jpeg"].map((src, index) => (
                <div
                  key={src}
                  className="h-14 w-auto rounded-lg border border-border/60 bg-card px-3 py-2 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`Intake brand mark ${index + 19}`}
                    className="max-h-full max-w-[96px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default Intake;
