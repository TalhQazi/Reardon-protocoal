import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhilosophyBar } from "@/components/PhilosophyBar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Privacy & Data Handling
            </h1>
            <p className="text-sm text-muted-foreground">
              This page outlines how data will be handled within The Reardon Protocol platform.
              The current system is in active development; detailed legal language and jurisdiction-
              specific policies will be provided before live deployment.
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                We treat all health-related information as highly sensitive. Any future intake,
                tracking, or analytics systems will be designed around encryption, access control,
                and strict minimization of who can see what and when.
              </p>
              <p>
                No data will be sold to third parties. Aggregated, de-identified metrics may be used
                to improve protocol design and understand outcomes, but not to target individuals.
              </p>
              <p>
                As the software layer matures, this page will be updated with full terms,
                jurisdiction-specific language, and contact paths for data access or deletion
                requests.
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

export default Privacy;
