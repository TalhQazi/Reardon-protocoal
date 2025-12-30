import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DiabetesProtocol from "./pages/DiabetesProtocol";
import CancerProtocol from "./pages/CancerProtocol";
import Science from "./pages/Science";
import About from "./pages/About";
import Intake from "./pages/Intake";
import Ethics from "./pages/Ethics";
import Privacy from "./pages/Privacy";
import DataTracking from "./pages/DataTracking";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diabetes" element={<DiabetesProtocol />} />
          <Route path="/cancer" element={<CancerProtocol />} />
          <Route path="/science" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/protocols" element={<Index />} />
          <Route path="/data" element={<DataTracking />} />
          <Route path="/research" element={<Research />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
