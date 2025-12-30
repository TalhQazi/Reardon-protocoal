import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[url('/21.jpeg')] bg-cover bg-center">
      {/* Soft overlay to reduce image intensity */}
      <div className="absolute inset-0 bg-white/65" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-diabetes/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cancer/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <div className="w-2 h-2 rounded-full bg-diabetes animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Biological Operating System
            </span>
            <div className="w-2 h-2 rounded-full bg-cancer animate-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">The Reardon</span>
            <br />
            <span className="bg-gradient-to-r from-diabetes via-foreground to-cancer bg-clip-text text-transparent">
              Protocol
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-4">
            One Platform. Two Biological Frontiers.
          </p>

          <p className="text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto">
            Where metabolic mastery meets systemic precision.
            <br className="hidden sm:block" />
            Not symptom management. Functional reversal.
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 mb-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>

        {/* Protocol Labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-8 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-diabetes" />
            <span className="text-muted-foreground">Diabetes Reversal</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cancer" />
            <span className="text-muted-foreground">Cancer Intervention</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
