import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Science", path: "/science" },
  { label: "Protocols", path: "/protocols" },
  { label: "Intake", path: "/intake" },
  { label: "Data & Tracking", path: "/data" },
  { label: "Research", path: "/research" },
  { label: "About", path: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isDiabetesContext = location.pathname.startsWith("/diabetes");
  const isCancerContext = location.pathname.startsWith("/cancer");

  const getActiveClasses = () => {
    if (isDiabetesContext) {
      return "text-diabetes bg-diabetes/10 border border-diabetes/40";
    }
    if (isCancerContext) {
      return "text-cancer bg-cancer/10 border border-cancer/40";
    }
    return "text-foreground bg-secondary border border-border/70";
  };

  const getInactiveClasses = () => {
    if (isDiabetesContext) {
      return "text-muted-foreground hover:text-diabetes hover:bg-diabetes/5";
    }
    if (isCancerContext) {
      return "text-muted-foreground hover:text-cancer hover:bg-cancer/5";
    }
    return "text-muted-foreground hover:text-foreground hover:bg-secondary/50";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            
            <span className="text-lg font-semibold tracking-tight">
              The Reardon Protocol
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? getActiveClasses()
                    : getInactiveClasses()
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? getActiveClasses()
                      : getInactiveClasses()
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
