import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statements = [
  "Chronic disease is not a life sentence.",
  "Metabolic failure is reversible.",
  "Cancer is not a mystery. It is a system failure.",
  "Biology responds to pressure.",
  "Systems thinking over symptom chasing.",
];

export function PhilosophyBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-secondary/80 backdrop-blur-xl border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-foreground font-medium tracking-wide text-center"
            >
              "{statements[currentIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
