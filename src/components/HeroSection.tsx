import { motion } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-background">
      {/* --- BACKGROUND LAYER --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"
        />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-diabetes/20 via-diabetes/10 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-tr from-cancer/20 via-cancer/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-secondary/10 backdrop-blur-md border border-border/50 shadow-xl mb-8"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cancer animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Advanced Biological OS</span>
              <div className="w-2.5 h-2.5 rounded-full bg-diabetes animate-pulse" />
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-foreground leading-[1.1]">
              The Reardon <br />
              <span className="bg-gradient-to-r from-cancer via-foreground to-diabetes animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent">
                Protocol
              </span>
            </h1>

            <div className="space-y-6 mb-12">
              <p className="text-2xl lg:text-3xl font-medium text-foreground/90">Precision Medical Innovation.</p>
              <p className="text-xl text-foreground/60 max-w-lg leading-relaxed">
                Tackling the world's most complex health challenges through systemic precision and metabolic mastery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-cancer/5 border border-cancer/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-cancer shadow-[0_0_15px_rgba(220,38,38,1)]" />
                  <span className="text-base font-semibold">Cancer Care</span>
               </div>
               <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-diabetes/5 border border-diabetes/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-diabetes shadow-[0_0_15px_rgba(59,130,246,1)]" />
                  <span className="text-base font-semibold">Diabetes Mastery</span>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: LARGE HORIZONTAL CARDS */}
          <div className="relative h-auto lg:h-[800px] w-full flex flex-col justify-center gap-6 lg:gap-10 mt-12 lg:mt-0">
            
            {/* CARD 1: Cancer Intervention */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-30 w-full lg:w-[115%] group self-end"
            >
              <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-cancer/40 via-transparent to-transparent backdrop-blur-xl">
                <div className="bg-background/80 p-6 lg:p-8 rounded-[2.5rem] border border-cancer/20 shadow-2xl transition-all duration-500 group-hover:bg-background/90 group-hover:-translate-y-2 flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
                  
                  {/* Left: Image Container */}
                  <div className="relative flex-shrink-0 w-48 h-48 lg:w-60 lg:h-60 bg-cancer/5 rounded-3xl flex items-center justify-center border border-cancer/10">
                    <img src="/logo1.png" alt="Cancer Intervention" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-full bg-cancer/10 text-cancer text-[10px] font-bold tracking-[0.2em] uppercase">Protocol Cancer</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-3 text-foreground">Cancer Intervention</h3>
                    <p className="text-foreground/60 text-sm lg:text-base leading-relaxed">
We leverage targeted molecular precision to disrupt malignant pathways and reinforce the body’s innate immune response. Our platform transforms complex biological data into actionable strategies for functional cellular restoration.                    </p>
                    <div className="mt-5 h-1.5 w-full bg-cancer/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "88%" }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-cancer" 
                        />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Diabetes Reversal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-30 w-full lg:w-[115%] group lg:-ml-[15%]"
            >
              <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-diabetes/40 via-transparent to-transparent backdrop-blur-xl">
                <div className="bg-background/80 p-6 lg:p-8 rounded-[2.5rem] border border-diabetes/20 shadow-2xl transition-all duration-500 group-hover:bg-background/90 group-hover:translate-y-2 flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
                  
                  {/* Left: Image Container */}
                  <div className="relative flex-shrink-0 w-48 h-48 lg:w-60 lg:h-60 bg-diabetes/5 rounded-3xl flex items-center justify-center border border-diabetes/10">
                    <img src="/logo2.png" alt="Diabetes Reversal" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-full bg-diabetes/10 text-diabetes text-[10px] font-bold tracking-[0.2em] uppercase">Protocol Diabetes</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-3 text-foreground">Diabetes Reversal</h3>
                    <p className="text-foreground/60 text-sm lg:text-base leading-relaxed">
          We leverage targeted molecular precision to disrupt malignant pathways and reinforce the body’s innate immune response. Our platform transforms complex biological data into actionable strategies for functional cellular restoration.                    </p>
                    <div className="mt-5 h-1.5 w-full bg-diabetes/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "94%" }}
                          transition={{ duration: 2, delay: 1.2 }}
                          className="h-full bg-diabetes" 
                        />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}