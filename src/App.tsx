import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import BoxTruck from "./pages/services/BoxTruck";
import DryVan from "./pages/services/DryVan";
import Reefer from "./pages/services/Reefer";
import PowerOnly from "./pages/services/PowerOnly";
import Hotshot from "./pages/services/Hotshot";
import FlatBed from "./pages/services/FlatBed";

// Main Pages
import FactoringPage from "./pages/FactoringPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Routes */}
          <Route path="/services/box-truck" element={<BoxTruck />} />
          <Route path="/services/dry-van" element={<DryVan />} />
          <Route path="/services/reefer" element={<Reefer />} />
          <Route path="/services/power-only" element={<PowerOnly />} />
          <Route path="/services/hotshot" element={<Hotshot />} />
          <Route path="/services/flat-bed" element={<FlatBed />} />
          {/* Main Pages */}
          <Route path="/factoring" element={<FactoringPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
