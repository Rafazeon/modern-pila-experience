import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

        <link rel="stylesheet" href="https://ebotmaker.ai/chat-widget.css" />
        <script src="https://ebotmaker.ai/chat-widget.js"></script>
        <iframe
          id="chat-container"
          src="https://ebotmaker.ai/widget/chat/66c0d2129e6181008e266c80"
        ></iframe>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
