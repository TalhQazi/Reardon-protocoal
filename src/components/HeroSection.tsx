import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
      {/* Enhanced gradient background with multiple orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main animated gradient background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-diabetes/20 via-diabetes/10 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-cancer/20 via-cancer/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Subtle floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, `-${Math.random() * 50 + 20}px`],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-secondary/30 to-secondary/10 backdrop-blur-sm border border-border/50 shadow-lg shadow-black/5 mb-8 group cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-diabetes"
              />
              <span className="text-sm font-medium bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Biological Operating System
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-2.5 h-2.5 rounded-full bg-cancer"
              />
            </motion.div>

            {/* Main Title with gradient animation */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block text-foreground"
              >
                The Reardon
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block"
              >
                <span className="bg-gradient-to-r from-diabetes via-foreground/90 to-cancer animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent">
                  Protocol
                </span>
              </motion.span>
            </h1>

            {/* Tagline with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl lg:text-2xl text-foreground/90 max-w-xl mb-4 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              >
                One Platform. Two Biological Frontiers.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg lg:text-xl text-foreground/80 max-w-lg leading-relaxed"
              >
                Where metabolic mastery meets systemic precision.
                <br className="hidden sm:block" />
                Not symptom management.{" "}
                <span className="font-semibold bg-gradient-to-r from-diabetes/90 to-cancer/90 bg-clip-text text-transparent">
                  Functional reversal.
                </span>
              </motion.p>
            </motion.div>

            {/* Animated Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
              className="mt-12 mb-8 max-w-md relative"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <motion.div
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-transparent via-diabetes to-transparent"
              />
            </motion.div>

            {/* Protocol Labels with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-8 text-sm font-medium"
            >
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-diabetes/10 to-diabetes/5 backdrop-blur-sm border border-diabetes/20 cursor-pointer group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3.5 h-3.5 rounded-full bg-diabetes shadow-glow-diabetes"
                />
                <span className="text-foreground/90 group-hover:text-diabetes transition-colors duration-300">
                  Diabetes Reversal
                </span>
              </motion.div>

              <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-border to-transparent" />

              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cancer/10 to-cancer/5 backdrop-blur-sm border border-cancer/20 cursor-pointer group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-3.5 h-3.5 rounded-full bg-cancer shadow-glow-cancer"
                />
                <span className="text-foreground/90 group-hover:text-cancer transition-colors duration-300">
                  Cancer Intervention
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-2xl mx-auto"
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(59, 130, 246, 0.1)",
                  "0 0 60px rgba(59, 130, 246, 0.2)",
                  "0 0 40px rgba(59, 130, 246, 0.1)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-diabetes/20 to-cancer/20 blur-xl opacity-70"
            />
            
            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl shadow-black/10 backdrop-blur-sm"
            >
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                    "linear-gradient(45deg, transparent, rgba(220, 38, 38, 0.1), transparent)",
                    "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 z-10"
              />
              
              <img
                src="/logo1.png"
                alt="The Reardon Protocol system visual"
                className="w-full h-full object-cover scale-105"
                loading="eager"
              />
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium"
              >
                AI-Powered Analysis
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium"
              >
                Real-time Metrics
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border/50 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 rounded-full bg-foreground/50 mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}