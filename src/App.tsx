
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigitalLibrary from "./pages/DigitalLibrary";
import IndustryConnect from "./pages/IndustryConnect";
import SkillTracker from "./pages/SkillTracker";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import JobPortal from "./pages/JobPortal";
import PeerLearning from "./pages/PeerLearning";
import Feedback from "./pages/Feedback";
import Donation from "./pages/Donation";
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
          <Route path="/digital-library" element={<DigitalLibrary />} />
          <Route path="/industry-connect" element={<IndustryConnect />} />
          <Route path="/skill-tracker" element={<SkillTracker />} />
          <Route path="/government-schemes" element={<GovernmentSchemes />} />
          <Route path="/job-portal" element={<JobPortal />} />
          <Route path="/peer-learning" element={<PeerLearning />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
