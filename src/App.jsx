import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import AnimationProvider from "@/components/animations/AnimationProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import ResidentialRoofing from "./pages/services/ResidentialRoofing";
import CommercialRoofing from "./pages/services/CommercialRoofing";
import StormDamage from "./pages/services/StormDamage";
import RoofRepair from "./pages/services/RoofRepair";
import GutterSystems from "./pages/services/GutterSystems";
import SidingExterior from "./pages/services/SidingExterior";
import About from "./pages/About";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/residential-roofing" element={<ResidentialRoofing />} />
      <Route path="/services/commercial-roofing" element={<CommercialRoofing />} />
      <Route path="/services/storm-damage" element={<StormDamage />} />
      <Route path="/services/roof-repair" element={<RoofRepair />} />
      <Route path="/services/gutter-systems" element={<GutterSystems />} />
      <Route path="/services/siding-exterior" element={<SidingExterior />} />
      <Route path="/about" element={<About />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AnimationProvider>
            <AppRoutes />
          </AnimationProvider>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
