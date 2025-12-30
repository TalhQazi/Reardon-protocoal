import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { User, Target, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/40">
          <div className="absolute inset-0 bg-white/15" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <User className="w-4 h-4 text-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  About The Protocol
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Built From
                <br />
                <span className="text-muted-foreground">Lived Experience</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                The Reardon Protocol emerged from the failures of conventional one-size-fits-all approaches. 
                Not a clinic. Not a supplement company. A system for biological optimization.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <img
                src="/17.jpeg"
                alt="Protocol brand mark 17"
                className="h-16 w-auto rounded-lg border border-border/60 bg-card object-contain p-2"
                loading="lazy"
              />
              <img
                src="/18.jpeg"
                alt="Protocol brand mark 18"
                className="h-16 w-auto rounded-lg border border-border/60 bg-card object-contain p-2"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Core Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Functional Outcomes",
                  description: "We measure success by biological function restored, not narratives constructed. Numbers move or they don't. Symptoms resolve or they don't. No hiding behind complexity.",
                },
                {
                  icon: Shield,
                  title: "Conservative Framing",
                  description: "No miracle language. No guaranteed cures. Clear boundaries about what the protocol can and cannot do. Over-promising is the enemy of credibility.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Evolution",
                  description: "The protocol improves with every case. Data drives refinement. What worked yesterday may be surpassed tomorrow. Stagnation is failure.",
                },
                {
                  icon: User,
                  title: "Individual Focus",
                  description: "Personalization isn't a marketing term. Each pathway is calibrated to individual biomarkers, history, and response patterns. Cookie-cutter approaches created the problems we're solving.",
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
                    className="p-8 rounded-xl bg-card border border-border"
                  >
                    <div className="p-3 rounded-lg bg-secondary w-fit mb-4">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Origin */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Why This Exists
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Standard medical care excels at acute intervention. Broken bones get set. Infections get 
                  treated. Emergencies get managed. But chronic metabolic disease? The system offers 
                  management, not resolution.
                </p>
                
                <p className="leading-relaxed">
                  The Reardon Protocol was built from frustration with that reality. When conventional 
                  approaches offer only escalating medication and declining function, something is wrong 
                  with the model, not the patient.
                </p>
                
                <p className="leading-relaxed">
                  This platform represents years of synthesis—combining metabolic research, clinical 
                  observation, and systematic iteration into coherent protocols that address root 
                  dysfunction rather than managing symptoms.
                </p>
                
                <p className="leading-relaxed">
                  We don't claim to cure everything. We claim to approach biological dysfunction 
                  systematically, measure rigorously, and adjust continuously. The results speak for 
                  themselves—or they don't, and we change the approach.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Not a replacement */}
        <section className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Important Clarification
              </h3>
              <p className="text-sm text-muted-foreground">
                The Reardon Protocol is designed to complement appropriate medical care, not replace it. 
                We work alongside healthcare providers when needed and encourage ongoing medical 
                supervision. Our protocols enhance outcomes—they don't substitute for emergency care, 
                surgical intervention, or acute medical treatment.
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

export default About;
