import { PathwayCard } from "./PathwayCard";

export function SplitPathways() {
  return (
    <section className="relative py-16 lg:py-20 min-h-[75vh] bg-gradient-to-r from-diabetes/5 via-background to-cancer/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
            Choose Your Pathway
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Two distinct biological frontiers. One unified systems approach.
          </p>
        </div>

        {/* Split Panels */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <PathwayCard type="diabetes" />
          <PathwayCard type="cancer" />
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/60 max-w-2xl mx-auto">
            Both pathways share a unified scientific philosophy, intake systems, and data tracking infrastructure. 
            Users never leave the platform — they move laterally between protocols as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
