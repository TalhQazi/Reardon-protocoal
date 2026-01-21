import { motion } from "framer-motion";
import { Brain, Zap, Shield, Target, ArrowRight, Sparkles, Atom, Cpu, ExternalLink } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Systems Biology",
    description: "Multi-layer intervention across metabolism, inflammation, and immune response.",
    gradient: "from-blue-500/20 to-purple-500/20",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Stacked Pressure",
    description: "Coordinated mild interventions outperform single aggressive approaches.",
    gradient: "from-amber-500/20 to-orange-500/20",
    color: "amber",
  },
  {
    icon: Shield,
    title: "Adaptive Defense",
    description: "Redundancy as a feature. Block escape routes before they form.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    color: "emerald",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Data-driven refinement. Pattern recognition over rigid protocols.",
    gradient: "from-rose-500/20 to-pink-500/20",
    color: "rose",
  },
];

const floatingShapes = [
  { type: "circle", size: "w-4 h-4", position: "top-10 left-10", delay: 0 },
  { type: "triangle", size: "w-6 h-6", position: "top-20 right-20", delay: 0.5 },
  { type: "square", size: "w-5 h-5", position: "bottom-20 left-16", delay: 1 },
  { type: "hexagon", size: "w-7 h-7", position: "bottom-10 right-12", delay: 1.5 },
];

export function SciencePreview() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-rose-500/5 via-pink-500/5 to-transparent rounded-full blur-3xl"
        />
        
        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? "from-blue-400/40 to-cyan-400/40" :
              i % 3 === 1 ? "from-rose-400/40 to-pink-400/40" :
              "from-emerald-400/40 to-teal-400/40"
            }`}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, `-${Math.random() * 100 + 50}px`],
              x: [null, Math.random() * 100 - 50 + "px"],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Floating DNA helix */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-1/3 w-80 h-80 opacity-10"
        >
          <Atom className="w-full h-full text-foreground/20" />
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-border/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-border/20 rounded-br-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with floating elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Animated label */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-background to-background/80 backdrop-blur-md border border-border/50 shadow-2xl shadow-black/5 mb-8"
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Evidence-Based Methodology
            </span>
            <Cpu className="w-5 h-5 text-blue-500" />
          </motion.div>

          {/* Related cancer websites heading + cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 mb-16 max-w-6xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Complementary Partner Platforms
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              These curated platforms align with the metabolic and environmental principles of our protocol,
              offering specialized tools, education, and product support for comprehensive care.
            </p>

            {/* Enhanced Cancer partner logos - Increased size and improved layout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {[ 
                {
                  name: "Autophashield",
                  src: "/autophasheild.png",
                  href: "https://autophashield.com/",
                  description: "Autophagy activation & cellular repair",
                  color: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  name: "Lacto Clear",
                  src: "/lactoclear.png",
                  href: "https://lactoclear.example.com",
                  description: "Lactate metabolism optimization",
                  color: "from-emerald-500/10 to-teal-500/10"
                },
                {
                  name: "Lase",
                  src: "/lase.png",
                  href: "https://lase.example.com",
                  description: "Light therapy & metabolic regulation",
                  color: "from-purple-500/10 to-pink-500/10"
                },
                {
                  name: "Radiamel",
                  src: "/radimal.png",
                  href: "https://radiamel.com/",
                  description: "Radiation recovery & protection",
                  color: "from-amber-500/10 to-orange-500/10"
                },
              ].map((logo, index) => (
                <motion.a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative flex flex-col items-center justify-center rounded-3xl border-2 border-border/60 bg-gradient-to-br from-card via-card/95 to-card backdrop-blur-sm px-6 py-10 sm:px-8 sm:py-12 shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden min-h-[280px] sm:min-h-[320px]"
                >
                  {/* Enhanced glow effect */}
                  <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${logo.color}`} />
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Floating animation for logo container */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="relative z-10 mb-6 sm:mb-8 p-4 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/40 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300"
                  >
                    {/* Logo with enhanced size and hover effect */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="relative z-10 h-[80px] sm:h-[100px] w-auto max-w-[180px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Enhanced text content */}
                  <div className="relative z-10 text-center space-y-3">
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {logo.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed px-2">
                      {logo.description}
                    </p>
                  </div>
                  
                  {/* External link indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-br from-background to-background/80 border border-border shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  
                  {/* Subtle particle effect on hover */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-primary/30"
                        initial={{ x: "0%", y: "0%" }}
                        animate={{
                          x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                          y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Main heading with gradient animation */}
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
                The Science
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent">
                  Behind the Protocol
                </span>
              </span>
            </h2>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
              className="h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            >
              <motion.div
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Why single-target therapies fail and how{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
              biological pressure points
            </span>{" "}
            create lasting change.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Principles Grid */}
          <div className="relative">
            {/* Floating shapes around the grid */}
            {floatingShapes.map((shape, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.5 }}
                className={`absolute ${shape.position} ${shape.size} bg-gradient-to-br from-border/30 to-border/10 backdrop-blur-sm rounded-lg -z-10`}
                animate={{
                  y: [0, -10, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: shape.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            <div className="grid sm:grid-cols-2 gap-6 relative">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 40, rotateX: 90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="relative group"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    {/* Card */}
                    <div className="relative p-7 rounded-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 overflow-hidden">
                      {/* Animated corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-current to-transparent opacity-20" />
                      </div>
                      
                      {/* Icon container with glow */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`relative p-4 rounded-xl bg-gradient-to-br ${principle.gradient} w-fit mb-5 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-foreground" />
                        
                        {/* Pulsing glow */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${principle.gradient} blur-md -z-10`}
                        />
                      </motion.div>
                      
                      {/* Title with gradient */}
                      <h3 className="text-xl font-bold mb-3">
                        <span className={`bg-gradient-to-r ${
                          principle.color === "blue" ? "from-blue-600 to-cyan-600" :
                          principle.color === "amber" ? "from-amber-600 to-orange-600" :
                          principle.color === "emerald" ? "from-emerald-600 to-teal-600" :
                          "from-rose-600 to-pink-600"
                        } bg-clip-text text-transparent`}>
                          {principle.title}
                        </span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {principle.description}
                      </p>
                      
                      {/* Animated indicator line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                        className="mt-5 h-0.5 bg-gradient-to-r from-border/50 via-border to-border/50"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA with arrow animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <a
                href="/science"
                className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-background to-background/80 backdrop-blur-md border border-border hover:border-foreground/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="relative">
                  <span className="text-lg font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Explore the full scientific rationale
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-rose-500/50"
                  />
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-rose-500"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Right: Enhanced Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating elements around image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-border/50 shadow-lg"
            />

            {/* Main image container */}
            <div className="relative">
              {/* Outer glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(59, 130, 246, 0.15)",
                    "0 0 80px rgba(220, 38, 38, 0.15)",
                    "0 0 60px rgba(59, 130, 246, 0.15)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-rose-500/20 blur-2xl opacity-70 -z-10"
              />
              
              {/* Image with floating effect */}
              <motion.div
                whileHover={{ scale: 1.02, rotateZ: 0.5 }}
                transition={{ duration: 0.3 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-border/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-2xl shadow-black/20"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, transparent 50%)",
                      "linear-gradient(45deg, rgba(244, 63, 94, 0.05) 0%, transparent 50%)",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-10"
                />
                
                <img
                  src="/13.jpeg"
                  alt="Scientific visualization behind The Reardon Protocol"
                  className="w-full h-full object-cover scale-110"
                  loading="lazy"
                />
                
                {/* Floating data overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm"
                >
                  <div className="text-white">
                    <div className="text-sm font-medium text-white/90 mb-2">Clinical Validation</div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold">94%</div>
                      <div className="text-sm text-white/70">Success rate in metabolic reset protocols</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-500/50 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500/50 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/50 rounded-br-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}