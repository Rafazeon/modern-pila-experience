import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import Index from "./pages/Index";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
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
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/5545999367427?text=Desejo%20conhecer%20mais%20sobre%20o%20pila%20benef%C3%ADcios."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <BsWhatsapp className="w-6 h-6" />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;