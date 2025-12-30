import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border/60 bg-card">
                <img
                  src="/6.jpeg"
                  alt="The Reardon Protocol logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-lg font-semibold">The Reardon Protocol</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              A biological operating system for metabolic mastery and systemic intervention. 
              Built from lived experience. Focused on functional outcomes.
            </p>
          </div>

          {/* Protocols */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Protocols</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/diabetes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Diabetes Reversal
                </Link>
              </li>
              <li>
                <Link to="/cancer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cancer Intervention
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Scientific Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/intake" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Start Intake
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Reardon Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/ethics" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Ethics & Safety
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
