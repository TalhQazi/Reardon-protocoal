import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";
import { motion } from "framer-motion";
import { Activity, Dna, ArrowRight, Sparkles, Target, Shield, Apple, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Protocols = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 border-b border-border bg-gradient-to-b from-secondary/10 via-background to-background overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-diabetes/5 blur-3xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-cancer/5 blur-3xl"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <div className="absolute inset-0 opacity-[0.02]">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px',
                }}
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Enhanced Client Logos Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 lg:mb-16"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">TRUSTED BY INDUSTRY LEADERS</span>
                </motion.div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                  Featured Healthcare Partners
                </h2>
              </div>

              {/* Client Logos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {/* Client 1 - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl border-2 border-border/50 bg-gradient-to-b from-card to-card/90 backdrop-blur-xl p-6 md:p-8 shadow-lg shadow-black/5 overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <Target className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400">Partner</span>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl shadow-black/10 backdrop-blur-sm flex items-center justify-center">
                      <img
                        src="/cleint 1.png"
                        alt="Client 1"
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        loading="eager"
                      />
                    </div>

                    {/* Client Info */}
                    <div className="mt-4 text-center">
                      <p className="text-sm font-medium text-foreground/90">Healthcare Partner</p>
                      <p className="text-xs text-muted-foreground mt-1">Since 2022</p>
                    </div>
                  </div>
                </motion.div>

                {/* Client 2 - Enhanced */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl border-2 border-border/50 bg-gradient-to-b from-card to-card/90 backdrop-blur-xl p-6 md:p-8 shadow-lg shadow-black/5 overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <Shield className="w-3 h-3 text-green-500" />
                        <span className="text-[10px] font-medium text-green-600 dark:text-green-400">Certified</span>
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border-2 border-border/50 bg-card shadow-2xl shadow-black/10 backdrop-blur-sm flex items-center justify-center">
                      <img
                        src="/cleint 2.png"
                        alt="Client 2"
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        loading="eager"
                      />
                    </div>

                    {/* Client Info */}
                    <div className="mt-4 text-center">
                      <p className="text-sm font-medium text-foreground/90">Medical Institution</p>
                      <p className="text-xs text-muted-foreground mt-1">Since 2021</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Trust Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-border/30"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { value: "98%", label: "Success Rate" },
                    { value: "24/7", label: "Support" },
                    { value: "1000+", label: "Patients" },
                    { value: "4.9★", label: "Rating" },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                      className="text-center"
                    >
                      <p className="text-xl font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Protocols
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Two primary program architectures inside The Reardon Protocol platform.
                  Choose the biological frontier that maps to your current reality.
                </p>
              </div>
            </motion.div>

            {/* Protocol Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Diabetes card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl border-2 border-diabetes/20 bg-gradient-to-br from-card via-card to-card/95 p-6 md:p-8 shadow-xl shadow-black/5 group"
              >
                {/* Animated background */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-diabetes/10 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-diabetes/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-diabetes/20 to-diabetes/10 border border-diabetes/30"
                  >
                    <Activity className="w-6 h-6 text-diabetes" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      Diabetes Reversal Protocol
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Metabolic control restoration for Type 2 diabetes and supportive pathways for Type 1.
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="relative space-y-3 text-sm text-muted-foreground mb-6">
                  {[
                    "• Insulin sensitivity rebuilding",
                    "• Inflammatory load reduction", 
                    "• Mitochondrial and signaling repair focus",
                    "• Comprehensive metabolic panel tracking"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-diabetes/50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* App Store Icons Section */}
                <div className="relative mb-4 pt-4 border-t border-border/20">
                  <p className="text-xs text-muted-foreground mb-3 text-center">Available on:</p>
                  <div className="flex justify-center gap-4">
                    {/* Apple Store Icon */}
                    <div className="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg mb-1">
                        <Apple className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground/70">App Store</span>
                    </div>
                    
                    {/* Google Play Store Icon */}
                    <div className="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-green-700 border border-green-800 shadow-lg mb-1">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground/70">Google Play</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative mt-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border/30">
                  <Link
                    to="/diabetes"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-diabetes to-diabetes/90 text-background text-sm font-semibold hover:shadow-lg hover:shadow-diabetes/25 transition-all"
                  >
                    View Protocol
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-xs text-muted-foreground max-w-[200px] text-center sm:text-right">
                    Best fit where glucose instability and medication load dominate daily life.
                  </p>
                </div>
              </motion.div>

              {/* Cancer card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl border-2 border-cancer/20 bg-gradient-to-br from-card via-card to-card/95 p-6 md:p-8 shadow-xl shadow-black/5 group"
              >
                {/* Animated background */}
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-cancer/10 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cancer/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-cancer/20 to-cancer/10 border border-cancer/30"
                  >
                    <Dna className="w-6 h-6 text-cancer" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      Cancer Intervention Protocol
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Environmental and metabolic pressure design layered with conventional care.
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="relative space-y-3 text-sm text-muted-foreground mb-6">
                  {[
                    "• Multi-modal pressure strategy",
                    "• Metabolic fuel and signaling disruption",
                    "• Immune support and recovery focus",
                    "• Comprehensive biomarker tracking"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cancer/50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* App Store Icons Section */}
                <div className="relative mb-4 pt-4 border-t border-border/20">
                  <p className="text-xs text-muted-foreground mb-3 text-center">Available on:</p>
                  <div className="flex justify-center gap-4">
                    {/* Apple Store Icon */}
                    <div className="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg mb-1">
                        <Apple className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground/70">App Store</span>
                    </div>
                    
                    {/* Google Play Store Icon */}
                    <div className="flex flex-col items-center opacity-70 cursor-not-allowed">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-green-700 border border-green-800 shadow-lg mb-1">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-foreground/70">Google Play</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative mt-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-border/30">
                  <Link
                    to="/cancer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cancer to-cancer/90 text-background text-sm font-semibold hover:shadow-lg hover:shadow-cancer/25 transition-all"
                  >
                    View Protocol
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-xs text-muted-foreground max-w-[200px] text-center sm:text-right">
                    Best fit where diagnosis, active treatment, or high-risk lesions are present.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA to intake */}
        <section className="relative py-16 lg:py-20 border-t border-border bg-gradient-to-b from-background via-background to-background/95 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-card to-card/90 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 shadow-xl"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">GET STARTED</span>
              </motion.div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Not sure where to start?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
                A structured intake maps your current biology to the correct protocol and intensity tier.
              </p>
              
              <Link
                to="/intake"
                className="group/cta inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-background text-sm font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all"
              >
                <span>Start Intake</span>
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <PhilosophyBar />
    </div>
  );
};

export default Protocols;