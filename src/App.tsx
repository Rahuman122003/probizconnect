import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AppBar from "./pages/AppBar.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import SalesConnect from "./pages/SalesConnect.jsx";
import DealerConnect from "./pages/DealerConnect.jsx";
import EmployeeConnect from "./pages/EmployeeConnect.jsx";
import PartnerConnect from "./pages/PartnerConnect.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Integration from "./pages/Integration.jsx";


const queryClient = new QueryClient();

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
           <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
           {/* <Route path="/blogs/:id" element={<PageWrapper><BlogDetail /></PageWrapper>} /> */}
           <Route path="/features/sales-connect" element={<SalesConnect />} />
           <Route path="/features/dealer-connect" element={<DealerConnect />} />
           <Route path="/features/employee-connect" element={<EmployeeConnect />} />
           <Route path="/features/partner-connect" element={<PartnerConnect />} />
            <Route path="/features/integrations" element={<Integration />} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider>
      <Toaster />
      <Sonner /> */}
      <Router>
        <ScrollToTop />
        <AppBar />
        <AnimatedRoutes />
      </Router>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;
