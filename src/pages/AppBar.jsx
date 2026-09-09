import React, { useState } from 'react'
import logo from "@/assets/pclogo.png";
import brochure from "@/assets/brochure.pdf";
import { Link, NavLink } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const baseClasses =
    "relative text-sm lg:text-base text-muted-foreground transition-colors px-1";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <div className="bg-gradient-card px-4 sm:px-6 mt-2">
      <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#dbeafe] rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">

            {/* LEFT */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <Link to="/" className="flex items-center gap-1" onClick={closeMobileMenu}>
                <img src={logo} alt="Probiz Logo" className="h-7 w-auto md:h-8" />
                <span
                  className="text-base sm:text-lg md:text-xl font-bold leading-none tracking-tight"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  <span style={{ color: "#2e7cde" }}>Probiz</span>
                  <span style={{ color: "#000000" }}>Connect</span>
                </span>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex md:items-center md:space-x-4 absolute left-1/2 transform -translate-x-1/2">

                <NavLink to="/" className={({ isActive }) =>
                  `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                }>
                  Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) =>
                  `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                }>
                  About
                </NavLink>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button className={`${baseClasses} hover:text-foreground flex items-center gap-1`}>
                    Solutions
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className="absolute left-0 mt-2 w-48 bg-card rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                    <NavLink to="/features/sales-connect" className="block px-4 py-2 text-sm hover:bg-muted">Sales Connect</NavLink>
                    <NavLink to="/features/dealer-connect" className="block px-4 py-2 text-sm hover:bg-muted">Dealer Connect</NavLink>
                    <NavLink to="/features/employee-connect" className="block px-4 py-2 text-sm hover:bg-muted">Employee Connect</NavLink>
                    <NavLink to="/features/partner-connect" className="block px-4 py-2 text-sm hover:bg-muted">Partner Connect</NavLink>
                    <NavLink to="/features/integrations" className="block px-4 py-2 text-sm hover:bg-muted">Integrations</NavLink>
                  </div>
                </div>

                <NavLink to="https://blogsbyprobiz.vercel.app/probiz-connect/blogs" className={baseClasses}>
                  Blogs
                </NavLink>

                {/* ✅ BROCHURE BUTTON */}
                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className={`${baseClasses} hover:text-foreground`}
                >
                  Brochure
                </button>

                <NavLink to="/contact" className={baseClasses}>
                  Contact
                </NavLink>
                

              </div>
            </div>

            {/* RIGHT BUTTON */}
            <Button asChild className="hidden md:flex md:bg-foreground md:text-background rounded-full px-4 lg:px-6">
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>

            {/* MOBILE MENU ICON */}
            <button className="flex md:hidden p-2 text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="block md:hidden mt-2 rounded-2xl px-4 py-4 bg-card/95 backdrop-blur-md shadow-xl border border-border/50 transition-all">
              <div className="flex flex-col space-y-3">

                <NavLink 
                  to="/" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors px-2 py-1.5 rounded-lg ${isActive ? "text-purple-400 font-semibold bg-muted/50" : "text-muted-foreground hover:text-foreground"}`
                  }
                >
                  Home
                </NavLink>

                <NavLink 
                  to="/about" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors px-2 py-1.5 rounded-lg ${isActive ? "text-purple-400 font-semibold bg-muted/50" : "text-muted-foreground hover:text-foreground"}`
                  }
                >
                  About
                </NavLink>

                {/* Mobile Solutions Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1.5 rounded-lg transition-colors w-full text-left"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isSolutionsOpen && (
                    <div className="flex flex-col ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                      <NavLink 
                        to="/features/sales-connect" 
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `text-sm py-1.5 ${isActive ? "text-purple-400 font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Sales Connect
                      </NavLink>
                      <NavLink 
                        to="/features/dealer-connect" 
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `text-sm py-1.5 ${isActive ? "text-purple-400 font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Dealer Connect
                      </NavLink>
                      <NavLink 
                        to="/features/employee-connect" 
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `text-sm py-1.5 ${isActive ? "text-purple-400 font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Employee Connect
                      </NavLink>
                      <NavLink 
                        to="/features/partner-connect" 
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `text-sm py-1.5 ${isActive ? "text-purple-400 font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Partner Connect
                      </NavLink>
                      <NavLink 
                        to="/features/integrations" 
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `text-sm py-1.5 ${isActive ? "text-purple-400 font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        Integrations
                      </NavLink>
                    </div>
                  )}
                </div>

                <a 
                  href="https://blogsbyprobiz.vercel.app/probiz-connect/blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg"
                >
                  Blogs
                </a>

                {/* Mobile Brochure */}
                <button
                  onClick={() => {
                    setIsBrochureOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg"
                >
                  Brochure
                </button>

                <NavLink 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors px-2 py-1.5 rounded-lg ${isActive ? "text-purple-400 font-semibold bg-muted/50" : "text-muted-foreground hover:text-foreground"}`
                  }
                >
                  Contact
                </NavLink>

                <div className="pt-2">
                  <Button asChild className="w-full rounded-full">
                    <Link to="/book-a-demo" onClick={closeMobileMenu}>Book a Demo</Link>
                  </Button>
                </div>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* 🔥 FULL SCREEN PDF MODAL */}
      {isBrochureOpen && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex flex-col">

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-md">
            <h2 className="text-white font-semibold">Company Brochure</h2>

            <button
              onClick={() => setIsBrochureOpen(false)}
              className="text-white text-xl hover:text-red-400"
            >
              ✕
            </button>
          </div>

          {/* PDF VIEWER */}
          <div className="flex-1 p-4">
            <iframe
              src={brochure}
              title="Brochure"
              className="w-full h-full rounded-xl"
            />
          </div>

        </div>
      )}

    </div>
  )
}

export default AppBar;