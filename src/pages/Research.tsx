import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Activity, FlaskConical, LineChart, RefreshCcw } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/40">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,hsl(194_86%_50%_/_0.25),transparent_55%),radial-gradient(circle_at_bottom,hsl(205_100%_45%_/_0.18),transparent_55%)]" />

          <div className="relative max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
                <FlaskConical className="w-4 h-4 text-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  Research & Development
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
                An Evolving Biological Operating System
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                The Reardon Protocol is not a static "program". It is an evolving operating
                system built from live clinical experience, structured observation, and
                disciplined pattern recognition. This environment exists to test, refine,
                and sometimes retire ideas based on how real biology behaves over time.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-border">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
                <Activity className="w-5 h-5 text-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Real-World Signal First</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The protocol evolves in response to real-world signal: metabolic labs,
                imaging, symptom trajectories, treatment tolerance, and recovery profiles.
                Hypotheses are kept lightweight until repeatable patterns appear.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
                <LineChart className="w-5 h-5 text-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Iterative Pathway Tuning</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interventions are adjusted in stacks, not in isolation. The aim is to
                understand which combinations of pressure create durable biological
                change without exceeding safety boundaries.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
                <RefreshCcw className="w-5 h-5 text-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Transparent, Not Exposed</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The philosophy, guardrails, and outcome categories are shared openly.
                Specific proprietary combinations and dosing logic are not published,
                protecting both patient safety and long-term protocol integrity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">How This Connects to You</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When you move through intake, diabetes, or cancer pathways, you are not
                entering a frozen product. You are entering a living system that updates
                as evidence accumulates. Cases that fall outside expected patterns are
                treated as high-value research signals, not outliers to ignore.
              </p>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                This page is intentionally light on marketing language and heavy on
                structure. It exists so clinicians, collaborators, and technically-minded
                patients can understand how the protocol evolves without revealing
                confidential implementation details.
              </p>
              <p>
                Over time, this environment can support more formal study reporting,
                including aggregated outcome ranges, safety reviews, and pattern maps that
                respect privacy while still showing how the system behaves at scale.
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

export default Research;
